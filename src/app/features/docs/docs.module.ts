import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatListModule } from '@angular/material';

import { components } from './components';
import { containers } from './containers';
import { DocsRoutingModule } from './docs-routing.module';
import { pages } from './pages';

const declarations = [...components, ...containers, ...pages];

const imports = [DocsRoutingModule, MatCardModule, MatIconModule, MatListModule];

@NgModule({
  declarations,
  imports,
})
export class DocsModule {}
