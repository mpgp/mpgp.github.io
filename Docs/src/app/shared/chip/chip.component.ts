import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'mpgp-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input()
  public verb: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';

  get isAccent() {
    return ['PATCH', 'PUT'].includes(this.verb);
  }

  get isPrimary() {
    return ['GET', 'POST'].includes(this.verb);
  }

  get isWarn() {
    return ['DELETE', 'HEAD', 'OPTIONS'].includes(this.verb);
  }
}
