import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { components } from '@core/components';
import { AppRootComponent, containers } from '@core/containers';
import { CoreModule } from '@core/core.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [AppRootComponent],
  declarations: [...components, ...containers],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, CoreModule, LayoutModule, HttpClientModule],
})
export class AppModule {}
