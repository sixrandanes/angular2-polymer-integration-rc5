import { PolyPage } from './app.po';

describe('poly App', function() {
  let page: PolyPage;

  beforeEach(() => {
    page = new PolyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('poly works!');
  });
});
