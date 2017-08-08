import { LastwillPage } from './app.po';

describe('lastwill App', () => {
  let page: LastwillPage;

  beforeEach(() => {
    page = new LastwillPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
