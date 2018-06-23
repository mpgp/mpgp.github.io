import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'docs-introduction',
  templateUrl: './docs-introduction.component.html',
})
export class DocsIntroductionComponent {}
