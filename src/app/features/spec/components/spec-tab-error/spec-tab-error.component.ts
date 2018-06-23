import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { ServerMessageResponse } from '../../models/server-message-response';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-tab-error',
  templateUrl: './spec-tab-error.component.html',
})
export class SpecTabErrorComponent {
  @Input() errors: ServerMessageResponse[];
}
