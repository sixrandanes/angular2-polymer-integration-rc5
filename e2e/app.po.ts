export class PolyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('poly-app .title')).getText();
  }
}
