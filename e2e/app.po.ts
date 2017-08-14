import { browser, by, element } from 'protractor';

export class LookmasterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lm-root h1')).getText();
  }
}
