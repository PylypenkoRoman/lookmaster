import { LookmasterPage } from './app.po';

describe('lookmaster App', () => {
  let page: LookmasterPage;

  beforeEach(() => {
    page = new LookmasterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to lm!!');
  });
});
