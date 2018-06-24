import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDividerModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '~/core/core.module';

import { components } from './components';
import { containers } from './containers';
import { MainRoutingModule } from './main-routing.module';
import { MainRootComponent, pages } from './pages';

const declarations = [...components, ...containers, ...pages];

export const vendorImports = [MatDividerModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule];

const imports = [MainRoutingModule, BrowserAnimationsModule, BrowserModule, CoreModule, HttpClientModule, LayoutModule, ...vendorImports];

const _exports = [MainRootComponent];

@NgModule({
  declarations,
  imports,
  exports: _exports,
})
export class MainModule {}
