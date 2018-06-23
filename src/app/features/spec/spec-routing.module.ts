import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpecRootComponent } from './pages';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'websocket/0/0/0' },
  { path: ':schema/:module/:action/:tab', component: SpecRootComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class SpecRoutingModule {}
