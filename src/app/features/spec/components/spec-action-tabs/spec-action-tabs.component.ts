import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { NavigatedEvent } from '../../events/navigated.event';
import { MessageSpec } from '../../models/message-spec';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-action-tabs',
  templateUrl: './spec-action-tabs.component.html',
})
export class SpecActionTabsComponent {
  @Input() spec: MessageSpec;
  @Input() params: NavigatedEvent;

  @Output() navigated = new EventEmitter<NavigatedEvent>();

  isNotEmpty(obj: object): boolean {
    return Object.keys(obj).length !== 0;
  }

  onNavigated(schema: string, module: number, action: number, tab: number): void {
    this.navigated.emit(new NavigatedEvent({ schema, module, action, tab }));
  }
}
