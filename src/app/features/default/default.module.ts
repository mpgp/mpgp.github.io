import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { containers } from './containers';
import { DefaultRoutingModule } from './default-routing.module';

@NgModule({
  declarations: [...containers],
  imports: [DefaultRoutingModule, SharedModule],
})
export class DefaultModule {}
