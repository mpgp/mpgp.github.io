import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '~/core/core.module';
import { SharedModule } from '~/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { components } from './components';
import { AppRootComponent, containers } from './containers';

@NgModule({
  bootstrap: [AppRootComponent],
  declarations: [...components, ...containers],
  imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, CoreModule, HttpClientModule, LayoutModule, SharedModule],
})
export class AppModule { }
