import { BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-sidenav-content',
  templateUrl: './app-sidenav-content.component.html',
})
export class AppSidenavContentComponent {
  @Input() isHandset: BreakpointState;

  @Output() toggle = new EventEmitter<boolean>(true);

  toggleMenu(): void {
    this.toggle.emit(true);
  }
}
