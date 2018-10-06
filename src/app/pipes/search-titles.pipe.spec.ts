import { SearchTitlesPipe } from './search-titles.pipe';

describe('SearchTitlesPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchTitlesPipe(null);
    expect(pipe).toBeTruthy();
  });
});
