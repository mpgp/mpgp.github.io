import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-chip',
  styleUrls: ['./chip.component.scss'],
  templateUrl: './chip.component.html',
})
export class ChipComponent {
  @Input()
  public verb: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';

  get isAccent(): boolean {
    return ['PATCH', 'PUT'].includes(this.verb);
  }

  get isPrimary(): boolean {
    return ['GET', 'POST'].includes(this.verb);
  }

  get isWarn(): boolean {
    return ['DELETE', 'HEAD', 'OPTIONS'].includes(this.verb);
  }
}
