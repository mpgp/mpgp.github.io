import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'docs-conclusion',
  templateUrl: './docs-conclusion.component.html',
})
export class DocsConclusionComponent {}
