import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { DefaultRoutingModule } from './default-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    DefaultRoutingModule,
    MatListModule,
    SharedModule,
  ],
})
export class DefaultModule { }
