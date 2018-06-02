import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@app/core/core.module';

import { AppMainComponent } from './app-main/app-main.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [AppMainComponent],
  declarations: [AppMainComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, CoreModule, LayoutModule, HttpClientModule],
})
export class AppModule {}
