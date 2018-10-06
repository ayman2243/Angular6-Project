import { AyatModule } from './ayat.module';

describe('AyatModule', () => {
  let ayatModule: AyatModule;

  beforeEach(() => {
    ayatModule = new AyatModule();
  });

  it('should create an instance', () => {
    expect(ayatModule).toBeTruthy();
  });
});
