import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { Field } from '../../models/field';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-fields',
  styleUrls: ['./spec-fields.component.scss'],
  templateUrl: './spec-fields.component.html',
})
export class SpecFieldsComponent {
  @Input() fields: Field[];
}
