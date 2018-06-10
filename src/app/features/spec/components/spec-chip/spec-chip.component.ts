import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-chip',
  styleUrls: ['./spec-chip.component.scss'],
  templateUrl: './spec-chip.component.html',
})
export class SpecChipComponent {
  @Input() verb: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';

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
