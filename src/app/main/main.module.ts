import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { components } from './components';
import { containers } from './containers';
import { MainRoutingModule } from './main-routing.module';
import { MainRootComponent, pages } from './pages';

const declarations = [...components, ...containers, ...pages];

export const vendorImports = [MatDividerModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule];

const imports = [CommonModule, MainRoutingModule, ...vendorImports];

const _exports = [MainRootComponent];

@NgModule({
  declarations,
  imports,
  exports: _exports,
})
export class MainModule {}
