import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'default' },
  { path: 'default', loadChildren: './features/default/default.module#DefaultModule' },
  { path: 'examples', loadChildren: './features/examples/examples.module#ExamplesModule' },
  { path: '**', redirectTo: 'default' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule {}
