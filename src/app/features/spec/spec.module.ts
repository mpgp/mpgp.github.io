import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule,
} from '@angular/material';

import { components } from './components';
import { containers } from './containers';
import { pages } from './pages';
import { SpecService } from './services/spec.service';
import { SpecRoutingModule } from './spec-routing.module';

const declarations = [...components, ...containers, ...pages];

const imports = [
  CommonModule,
  SpecRoutingModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule,
];

const providers = [SpecService];

@NgModule({
  declarations,
  imports,
  providers,
})
export class SpecModule {}
