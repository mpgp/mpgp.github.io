import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrapOptions = [{
  defaultEncapsulation: ViewEncapsulation.None
}];

platformBrowserDynamic().bootstrapModule(AppModule, bootstrapOptions)
  .catch(err => console.log(err));
