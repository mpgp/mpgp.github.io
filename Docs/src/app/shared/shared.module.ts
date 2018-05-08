import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs'
import { NgModule } from '@angular/core';

import { ChipComponent } from './chip/chip.component';
import { CodeComponent } from './code/code.component';
import { FieldsComponent } from './fields/fields.component';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatExpansionModule,
  MatIconModule,
  MatSelectModule,
  MatTabsModule,
];

const sharedModules = [
  FormsModule
]

const sharedComponents = [
  ChipComponent,
  CodeComponent,
  FieldsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules,
    ...sharedModules,
  ],
  exports: [
    CommonModule,
    ...materialModules,
    ...sharedComponents,
    ...sharedModules
  ],
  declarations: [
    ...sharedComponents,
  ]
})
export class SharedModule { }
