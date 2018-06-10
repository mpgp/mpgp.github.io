import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpecRootComponent } from './containers';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'websocket/0/0/0' },
  { path: ':specification/:module/:action/:tab', component: SpecRootComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class SpecRoutingModule {}
