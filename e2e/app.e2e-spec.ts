import { SequenceManagerPage } from './app.po';

describe('sequence-manager App', function() {
  let page: SequenceManagerPage;

  beforeEach(() => {
    page = new SequenceManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
