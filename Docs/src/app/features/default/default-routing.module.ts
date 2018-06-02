import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultMainComponent } from './default-main/default-main.component';

const routes: Routes = [{ path: '', component: DefaultMainComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class DefaultRoutingModule {}
