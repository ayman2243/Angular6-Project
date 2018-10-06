import { SearchTopicsPipe } from './search-topics.pipe';

describe('SearchTopicsPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchTopicsPipe(null);
    expect(pipe).toBeTruthy();
  });
});
