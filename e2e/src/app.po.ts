// tslint:disable: no-any no-implicit-dependencies
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): any {
    return browser.get('/');
  }

  getParagraphText(): any {
    return element(by.css('app-root > mat-sidenav-container > mat-sidenav-content > app-sidenav-content > mat-toolbar > span')).getText();
  }
}
