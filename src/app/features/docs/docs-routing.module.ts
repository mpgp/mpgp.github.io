import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsRootComponent } from './pages';

const routes: Routes = [{ path: '', component: DocsRootComponent }, { path: ':id', component: DocsRootComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class DocsRoutingModule {}
