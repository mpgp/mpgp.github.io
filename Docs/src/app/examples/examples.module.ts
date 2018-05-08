import { NgModule } from '@angular/core';

import { ExamplesRoutingModule } from './examples-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ExamplesRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class ExamplesModule { }
