import { ResearshteamModule } from './researshteam.module';

describe('ResearshteamModule', () => {
  let researshteamModule: ResearshteamModule;

  beforeEach(() => {
    researshteamModule = new ResearshteamModule();
  });

  it('should create an instance', () => {
    expect(researshteamModule).toBeTruthy();
  });
});
