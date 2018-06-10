import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-sidenav',
  styleUrls: ['./app-sidenav.component.scss'],
  templateUrl: './app-sidenav.component.html',
})
export class AppSidenavComponent {}
