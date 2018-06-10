import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplesRootComponent } from './containers';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'websocket/0/0/0' },
  { path: ':specification/:module/:action/:tab', component: ExamplesRootComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ExamplesRoutingModule {}
