import { TenproductDashboardPage } from './app.po';

describe('tenplatform-dashboard App', () => {
  let page: TenproductDashboardPage;

  beforeEach(() => {
    page = new TenproductDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
