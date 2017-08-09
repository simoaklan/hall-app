import { HallAppPage } from './app.po';

describe('hall-app App', () => {
  let page: HallAppPage;

  beforeEach(() => {
    page = new HallAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
