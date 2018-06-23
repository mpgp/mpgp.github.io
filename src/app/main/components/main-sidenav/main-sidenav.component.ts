import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'main-sidenav',
  styleUrls: ['./main-sidenav.component.scss'],
  templateUrl: './main-sidenav.component.html',
})
export class MainSidenavComponent {}
