import { FaceGramPage } from './app.po';

describe('face-gram App', function() {
  let page: FaceGramPage;

  beforeEach(() => {
    page = new FaceGramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
