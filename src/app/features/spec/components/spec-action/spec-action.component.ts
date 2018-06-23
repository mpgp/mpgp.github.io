import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { NavigatedEvent } from '../../events/navigated.event';
import { Message } from '../../models/message';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-action',
  templateUrl: './spec-action.component.html',
})
export class SpecActionComponent {
  @Input() message: Message;
  @Input() params: NavigatedEvent;

  @Output() navigated = new EventEmitter<NavigatedEvent>();

  onNavigated(schema: string, module: number, action: number, tab: number): void {
    this.navigated.emit(new NavigatedEvent({ schema, module, action, tab }));
  }
}
