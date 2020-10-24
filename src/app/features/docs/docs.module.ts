import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { components } from './components';
import { containers } from './containers';
import { DocsRoutingModule } from './docs-routing.module';
import { pages } from './pages';

const declarations = [...components, ...containers, ...pages];

export const vendorImports = [MatCardModule, MatIconModule, MatListModule];

const imports = [DocsRoutingModule, ...vendorImports];

@NgModule({
  declarations,
  imports,
})
export class DocsModule {}
