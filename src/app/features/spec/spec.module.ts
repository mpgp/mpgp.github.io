import { NgModule } from '@angular/core';

import { SharedModule } from '~/shared/shared.module';

import { SpecService } from './services/spec.service';
import { SpecRoutingModule } from './spec-routing.module';

import { components } from './components';
import { containers } from './containers';

@NgModule({
  declarations: [...components, ...containers],
  imports: [SpecRoutingModule, SharedModule],
  providers: [SpecService],
})
export class SpecModule { }
