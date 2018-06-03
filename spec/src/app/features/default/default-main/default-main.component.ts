import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-default-main',
  styleUrls: ['./default-main.component.scss'],
  templateUrl: './default-main.component.html',
})
export class DefaultMainComponent {}
