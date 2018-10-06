import { SearchInterpretersPipe } from './search-interpreters.pipe';
import { SearchService } from '../services/modules/search.service';

describe('SearchInterpretersPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchInterpretersPipe(null);
    expect(pipe).toBeTruthy();
  });
});
