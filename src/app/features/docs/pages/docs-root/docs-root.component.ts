import { AfterViewInit, ChangeDetectionStrategy, Component, NgZone, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'docs-root',
  styleUrls: ['./docs-root.component.scss'],
  templateUrl: './docs-root.component.html',
})
export class DocsRootComponent implements AfterViewInit, OnDestroy {
  private readonly componentDestroyed$ = new Subject<boolean>();

  isFirstScroll = true;

  constructor(private readonly route: ActivatedRoute, private readonly ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.route.params
      .pipe(
        takeUntil(this.componentDestroyed$),
        map(({ id }) => document.getElementById(id)),
        filter(element => !!element),
      )
      .subscribe(element => {
        element?.scrollIntoView();

        if (this.isFirstScroll) {
          this.isFirstScroll = false;
          this.ngZone.runOutsideAngular(() => {
            setTimeout(() => element?.scrollIntoView(), 500);
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.unsubscribe();
  }
}
