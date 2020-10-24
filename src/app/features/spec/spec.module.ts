import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { components } from './components';
import { containers } from './containers';
import { pages } from './pages';
import { SpecService } from './services/spec.service';
import { SpecRoutingModule } from './spec-routing.module';

const declarations = [...components, ...containers, ...pages];

export const vendorImports = [
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule,
];

const imports = [CommonModule, SpecRoutingModule, ...vendorImports];

const providers = [SpecService];

@NgModule({
  declarations,
  imports,
  providers,
})
export class SpecModule {}
