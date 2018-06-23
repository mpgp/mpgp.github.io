import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';

const materialComponentModules = [
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatSelectModule,
  MatTabsModule,
];

@NgModule({
  exports: [...materialComponentModules],
})
export class MaterialModule { }
