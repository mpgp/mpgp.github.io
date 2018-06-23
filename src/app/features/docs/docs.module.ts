import { NgModule } from '@angular/core';

import { SharedModule } from '~/shared/shared.module';

import { containers } from './containers';
import { DocsRoutingModule } from './docs-routing.module';

@NgModule({
  declarations: [...containers],
  imports: [DocsRoutingModule, SharedModule],
})
export class DocsModule { }
