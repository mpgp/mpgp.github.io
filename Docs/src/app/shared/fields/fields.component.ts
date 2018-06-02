import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { Field } from '../models/field';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-fields',
  styleUrls: ['./fields.component.scss'],
  templateUrl: './fields.component.html',
})
export class FieldsComponent {
  @Input()
  public fields: Field[];
}
