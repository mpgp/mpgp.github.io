import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
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
export class DocsRootComponent implements OnInit, OnDestroy {
  private readonly componentDestroyed$ = new Subject<boolean>();

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntil(this.componentDestroyed$),
        map(({ id }) => document.getElementById(id)),
        filter(element => !!element),
    )
      .subscribe(element => element.scrollIntoView());
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.unsubscribe();
  }
}
