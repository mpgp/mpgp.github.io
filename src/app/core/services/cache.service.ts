import { Observable, of, Subject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

interface CacheContent<T> {
  expiry: number;
  value: T;
}

// Non-injectable.
// Do not provide this service to modules.
export class CacheService {
  /* tslint:disable:no-any */
  private readonly cache = new Map<string, CacheContent<any>>();
  private readonly inFlightObservables = new Map<string, Subject<any>>();
  /* tslint:enable:no-any */
  public static readonly cacheTime = 300000;
  public static readonly errorMsg = 'Requested key is not available in Cache';
  private static instanceValue: CacheService;

  public static get instance(): CacheService {
    return CacheService.instanceValue || (CacheService.instanceValue = new CacheService());
  }

  public get<T>(key: string, fallback?: Observable<T>, cacheTime: number = CacheService.cacheTime): Observable<T> {
    if (this.hasValidCachedValue(key)) {
      const cache = this.cache.get(key);

      if (!cache) {
        return throwError(CacheService.errorMsg);
      }

      return of(cache.value) as Observable<T>;
    }

    if (this.inFlightObservables.has(key)) {
      return this.inFlightObservables.get(key) as Observable<T>;
    }

    if (fallback && fallback instanceof Observable) {
      this.inFlightObservables.set(key, new Subject());

      return fallback.pipe(tap(value => this.set(key, value, cacheTime)));
    }

    return throwError(CacheService.errorMsg);
  }

  public has(key: string): boolean {
    return this.cache.has(key);
  }

  private set<T>(key: string, value: T, maxAge: number = CacheService.cacheTime): void {
    this.cache.set(key, { expiry: Date.now() + maxAge, value });
    this.notifyInFlightObservers(key, value);
  }

  private notifyInFlightObservers<T>(key: string, value: T): void {
    if (this.inFlightObservables.has(key)) {
      const inFlight = this.inFlightObservables.get(key);

      if (!inFlight) {
        return;
      }

      const observersCount = inFlight.observers.length;

      if (observersCount) {
        inFlight.next(value);
      }

      inFlight.complete();
      this.inFlightObservables.delete(key);
    }
  }

  private hasValidCachedValue(key: string): boolean {
    if (!this.cache.has(key)) {
      return false;
    }

    const cache = this.cache.get(key);

    if (!cache) {
      return false;
    }

    if (cache.expiry < Date.now()) {
      this.cache.delete(key);

      return false;
    }

    return true;
  }
}

/* tslint:disable:no-any no-invalid-this */
export function Cacheable(cacheTime: number = CacheService.cacheTime): Function {
  return (target: Object, methodName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor => {
    const descriptor = propertyDescriptor || Object.getOwnPropertyDescriptor(target, methodName);
    const originalMethod = descriptor.value;

    descriptor.value = function newMethod(): any {
      const args = Array.from(arguments);
      const key = `${target.constructor.name}.${methodName}:${args.join(',')}`;
      const result = originalMethod.apply(this, args);

      return CacheService.instance.get(key, result, cacheTime);
    };

    return descriptor;
  };
}
