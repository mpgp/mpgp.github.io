import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { NavigatedEvent } from '../../events/navigated.event';
import { Message } from '../../models/message';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-module',
  templateUrl: './spec-module.component.html',
})
export class SpecModuleComponent {
  @Input() message: Message;
  @Input() params: NavigatedEvent;

  @Output() navigated = new EventEmitter<NavigatedEvent>();

  onNavigated(params: NavigatedEvent): void {
    this.navigated.emit(params);
  }
}
