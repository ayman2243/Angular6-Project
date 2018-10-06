import { TitlesxModule } from './titlesx.module';

describe('TitlesxModule', () => {
  let titlesxModule: TitlesxModule;

  beforeEach(() => {
    titlesxModule = new TitlesxModule();
  });

  it('should create an instance', () => {
    expect(titlesxModule).toBeTruthy();
  });
});
