import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct title', () => {
    page.navigateTo();
    expect(page.getParagraphText())
      .toEqual('MPGP Documentation')
      .catch(e => console.error(e));
  });
});
