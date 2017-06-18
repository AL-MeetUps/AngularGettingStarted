import { AppDemoPage } from './app.po';

describe('app-demo App', () => {
  let page: AppDemoPage;

  beforeEach(() => {
    page = new AppDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
