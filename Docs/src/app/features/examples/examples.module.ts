import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { ExamplesChipComponent } from './examples-chip/examples-chip.component';
import { ExamplesCodeComponent } from './examples-code/examples-code.component';
import { ExamplesFieldsComponent } from './examples-fields/examples-fields.component';
import { ExamplesMainComponent } from './examples-main/examples-main.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesService } from './services/examples.service';

const components = [ExamplesChipComponent, ExamplesCodeComponent, ExamplesFieldsComponent, ExamplesMainComponent];

@NgModule({
  declarations: [...components],
  imports: [ExamplesRoutingModule, SharedModule],
  providers: [ExamplesService],
})
export class ExamplesModule {}
