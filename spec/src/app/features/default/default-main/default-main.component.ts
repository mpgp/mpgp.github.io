import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-default-main',
  styleUrls: ['./default-main.component.scss'],
  templateUrl: './default-main.component.html',
})
export class DefaultMainComponent implements OnInit {
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
