import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '~/core/core.module';
import { MainModule } from '~/main/main.module';

import { AppComponent } from './app.component';

const bootstrap = [AppComponent];

const declarations = [AppComponent];

const imports = [BrowserAnimationsModule, BrowserModule, CoreModule, HttpClientModule, LayoutModule, MainModule];

@NgModule({
  bootstrap,
  declarations,
  imports,
})
export class AppModule {}
