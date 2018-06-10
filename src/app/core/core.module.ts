import { NgModule } from '@angular/core';

import { MaterialModule } from '@shared/material.module';

@NgModule({
  exports: [MaterialModule],
  imports: [MaterialModule],
  providers: [],
})
export class CoreModule {}
