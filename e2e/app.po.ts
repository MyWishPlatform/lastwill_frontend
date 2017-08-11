import { browser, element, by } from 'protractor';

export class LastwillPage {
  navigateTo(page: string) {
    return browser.get(page);
  }
  getCurrentLocation() {
    return browser.getCurrentUrl();
  }
  getElement(selector) {
    return element(by.css(selector));
  }
}
