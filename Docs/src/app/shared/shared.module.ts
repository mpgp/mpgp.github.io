import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

const sharedModules = [FormsModule];

const sharedComponents = [];

@NgModule({
  declarations: [...sharedComponents],
  exports: [CommonModule, MaterialModule, ...sharedComponents, ...sharedModules],
  imports: [CommonModule, MaterialModule, ...sharedModules],
})
export class SharedModule {}
