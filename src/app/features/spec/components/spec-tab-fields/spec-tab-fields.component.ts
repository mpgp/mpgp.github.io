import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { Field } from '../../models/field';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-tab-fields',
  styleUrls: ['./spec-tab-fields.component.scss'],
  templateUrl: './spec-tab-fields.component.html',
})
export class SpecTabFieldsComponent {
  @Input() fields: Field[];
}
