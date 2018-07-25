import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-code',
  styleUrls: ['./spec-code.component.scss'],
  templateUrl: './spec-code.component.html',
})
export class SpecCodeComponent {
  @Input() jsonData: object;

  get hasData(): boolean {
    return Object.keys(this.jsonData || {}).length > 0;
  }
}
