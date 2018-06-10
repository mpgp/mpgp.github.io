import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { Field } from '../../models/field';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'examples-fields',
  styleUrls: ['./examples-fields.component.scss'],
  templateUrl: './examples-fields.component.html',
})
export class ExamplesFieldsComponent {
  @Input() fields: Field[];
}
