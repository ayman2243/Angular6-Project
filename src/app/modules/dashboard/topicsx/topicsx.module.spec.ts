import { TopicsxModule } from './topicsx.module';

describe('TopicsxModule', () => {
  let topicsxModule: TopicsxModule;

  beforeEach(() => {
    topicsxModule = new TopicsxModule();
  });

  it('should create an instance', () => {
    expect(topicsxModule).toBeTruthy();
  });
});
