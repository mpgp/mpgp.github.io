import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesService } from './services/examples.service';

import { components } from './components';
import { containers } from './containers';

@NgModule({
  declarations: [...components, ...containers],
  imports: [ExamplesRoutingModule, SharedModule],
  providers: [ExamplesService],
})
export class ExamplesModule {}
