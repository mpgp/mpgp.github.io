import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'docs-root',
  styleUrls: ['./docs-root.component.scss'],
  templateUrl: './docs-root.component.html',
})
export class DocsRootComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(({ id }) => document.getElementById(id)),
        filter(element => !!element),
      )
      // FIXME: unsub.
      .subscribe(element => {
        element.scrollIntoView();
      });
  }
}
