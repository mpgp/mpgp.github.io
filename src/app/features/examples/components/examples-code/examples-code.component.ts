import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'examples-code',
  styleUrls: ['./examples-code.component.scss'],
  templateUrl: './examples-code.component.html',
})
export class ExamplesCodeComponent {
  @Input() jsonData: object;
}
