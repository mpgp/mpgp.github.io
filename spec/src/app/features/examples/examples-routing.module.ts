import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplesMainComponent } from './examples-main/examples-main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'websocket/0/0/0' },
  { path: ':specification/:module/:action/:tab', component: ExamplesMainComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ExamplesRoutingModule {}
