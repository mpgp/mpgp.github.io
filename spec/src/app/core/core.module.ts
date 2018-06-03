import { NgModule } from '@angular/core';

import { MaterialModule } from '@app/shared/material.module';

@NgModule({
  exports: [MaterialModule],
  imports: [MaterialModule],
  providers: [],
})
export class CoreModule {}
