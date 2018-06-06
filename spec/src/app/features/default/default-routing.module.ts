import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultMainComponent } from './default-main/default-main.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: '0' }, { path: ':id', component: DefaultMainComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class DefaultRoutingModule {}
