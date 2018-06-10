import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultRootComponent } from './containers';

const routes: Routes = [{ path: '', component: DefaultRootComponent }, { path: ':id', component: DefaultRootComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class DefaultRoutingModule {}
