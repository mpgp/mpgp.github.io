import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { NavigateEvent } from '../../events/navigate.event';
import { Message } from '../../models/message';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-action',
  templateUrl: './spec-action.component.html',
})
export class SpecActionComponent {
  @Input() message: Message;
  @Input() params: NavigateEvent;

  @Output() navigate = new EventEmitter<NavigateEvent>();

  onNavigate(schema: string, module: number, action: number, tab: number): void {
    this.navigate.emit(new NavigateEvent({ schema, module, action, tab }));
  }
}
