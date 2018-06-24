import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { NavigateEvent } from '../../events/navigate.event';
import { Message } from '../../models/message';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-module',
  templateUrl: './spec-module.component.html',
})
export class SpecModuleComponent {
  @Input() message: Message;
  @Input() params: NavigateEvent;

  @Output() navigate = new EventEmitter<NavigateEvent>();

  onNavigate(params: NavigateEvent): void {
    this.navigate.emit(params);
  }
}
