import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'docs' },
  { path: 'docs', loadChildren: './features/docs/docs.module#DocsModule' },
  { path: 'spec', loadChildren: './features/spec/spec.module#SpecModule' },
  { path: '**', redirectTo: 'docs' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule {}
