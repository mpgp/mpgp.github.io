import { NgModule } from '@angular/core';

import { DefaultRoutingModule } from './default-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    DefaultRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class DefaultModule { }
