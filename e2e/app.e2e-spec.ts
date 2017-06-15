import { PersonalAssistantsSamplePage } from './app.po';

describe('personal-assistants-sample App', () => {
  let page: PersonalAssistantsSamplePage;

  beforeEach(() => {
    page = new PersonalAssistantsSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
