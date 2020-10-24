import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MessageVerb } from '~/app/features/spec/models/message-spec';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-chip',
  styleUrls: ['./spec-chip.component.scss'],
  templateUrl: './spec-chip.component.html',
})
export class SpecChipComponent {
  @Input() verb!: MessageVerb;

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
