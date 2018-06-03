import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';

import { SharedModule } from '@app/shared/shared.module';

import { DefaultMainComponent } from './default-main/default-main.component';
import { DefaultRoutingModule } from './default-routing.module';

@NgModule({
  declarations: [DefaultMainComponent],
  imports: [DefaultRoutingModule, MatListModule, SharedModule],
})
export class DefaultModule {}
