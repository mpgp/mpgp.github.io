import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'default-root',
  styleUrls: ['./default-root.component.scss'],
  templateUrl: './default-root.component.html',
})
export class DefaultRootComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(({ id }) => document.getElementById(id)),
        filter(element => !!element),
      )
      .subscribe(element => {
        element.scrollIntoView();
      });
  }
}
