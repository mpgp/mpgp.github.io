// tslint:disable: no-any
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): any {
    return browser.get('/');
  }

  getParagraphText(): any {
    return element(by.css('app-root > mat-sidenav-container > mat-sidenav-content > app-sidenav-content > mat-toolbar > span')).getText();
  }
}
