import { Ng2DomchartsPage } from './app.po';

describe('ng2-domcharts App', function() {
  let page: Ng2DomchartsPage;

  beforeEach(() => {
    page = new Ng2DomchartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
