import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { ChipComponent } from './chip/chip.component';
import { CodeComponent } from './code/code.component';
import { FieldsComponent } from './fields/fields.component';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatSelectModule,
  MatTabsModule,
];

const sharedModules = [
  FormsModule,
];

const sharedComponents = [
  ChipComponent,
  CodeComponent,
  FieldsComponent,
];

@NgModule({
  declarations: [
    ...sharedComponents,
  ],
  exports: [
    CommonModule,
    ...materialModules,
    ...sharedComponents,
    ...sharedModules,
  ],
  imports: [
    CommonModule,
    ...materialModules,
    ...sharedModules,
  ],
})
export class SharedModule { }
