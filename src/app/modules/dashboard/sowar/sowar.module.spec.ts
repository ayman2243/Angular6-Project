import { SowarModule } from './sowar.module';

describe('SowarModule', () => {
  let sowarModule: SowarModule;

  beforeEach(() => {
    sowarModule = new SowarModule();
  });

  it('should create an instance', () => {
    expect(sowarModule).toBeTruthy();
  });
});
