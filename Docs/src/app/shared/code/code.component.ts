import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-code',
  styleUrls: ['./code.component.scss'],
  templateUrl: './code.component.html',
})
export class CodeComponent {
  @Input()
  public jsonData: object;
}
