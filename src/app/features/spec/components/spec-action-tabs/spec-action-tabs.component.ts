import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { NavigateEvent } from '../../events/navigate.event';
import { MessageSpec } from '../../models/message-spec';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-action-tabs',
  templateUrl: './spec-action-tabs.component.html',
})
export class SpecActionTabsComponent {
  @Input() spec: MessageSpec;
  @Input() params: NavigateEvent;

  @Output() navigate = new EventEmitter<NavigateEvent>();

  isNotEmpty(obj: object): boolean {
    return Object.keys(obj).length !== 0;
  }

  onNavigate(schema: string, module: number, action: number, tab: number): void {
    this.navigate.emit(new NavigateEvent({ schema, module, action, tab }));
  }
}
