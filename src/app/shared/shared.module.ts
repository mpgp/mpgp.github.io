import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { components } from './components';
import { containers } from './containers';
import { MaterialModule } from './material.module';

const sharedModules = [CommonModule, FormsModule];

@NgModule({
  declarations: [...components, ...containers],
  exports: [MaterialModule, ...components, ...containers, ...sharedModules],
})
export class SharedModule {}
