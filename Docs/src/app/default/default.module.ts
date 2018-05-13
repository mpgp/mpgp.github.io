import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';

import { DefaultRoutingModule } from './default-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    DefaultRoutingModule,
    MatListModule,
    SharedModule,
  ],
  declarations: [
    MainComponent,
  ]
})
export class DefaultModule { }
