import { NgModule } from '@angular/core';

import { components } from './components';
import { containers } from './containers';

const sharedModules = [];

@NgModule({
  declarations: [...components, ...containers],
  exports: [...components, ...containers, ...sharedModules],
})
export class SharedModule { }
