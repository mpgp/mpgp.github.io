import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ExamplesRoutingModule } from './examples-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    ExamplesRoutingModule,
    SharedModule,
  ],
})
export class ExamplesModule { }
