import { FirebaseDemoPage } from './app.po';

describe('firebase-demo App', function() {
  let page: FirebaseDemoPage;

  beforeEach(() => {
    page = new FirebaseDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
