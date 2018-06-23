import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { ServerMessageResponse } from '../../models/server-message-response';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-tab-success',
  templateUrl: './spec-tab-success.component.html',
})
export class SpecTabSuccessComponent {
  @Input() response: ServerMessageResponse;
}
