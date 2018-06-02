import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './default/default.module#DefaultModule' },
  { path: 'examples', loadChildren: './examples/examples.module#ExamplesModule' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
