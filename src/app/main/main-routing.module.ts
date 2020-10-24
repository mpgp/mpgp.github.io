import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'docs' },
  { path: 'docs', loadChildren: () => import('../features/docs/docs.module').then(m => m.DocsModule) },
  { path: 'spec', loadChildren: () => import('../features/spec/spec.module').then(m => m.SpecModule) },
  { path: '**', redirectTo: 'docs' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class MainRoutingModule {}
