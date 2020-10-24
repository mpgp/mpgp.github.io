import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

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
