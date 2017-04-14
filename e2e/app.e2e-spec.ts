import { QueryBuilderPage } from './app.po';

describe('query-builder App', () => {
  let page: QueryBuilderPage;

  beforeEach(() => {
    page = new QueryBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
