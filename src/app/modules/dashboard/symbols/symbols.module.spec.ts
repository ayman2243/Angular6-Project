import { SymbolsModule } from './symbols.module';

describe('SymbolsModule', () => {
  let symbolsModule: SymbolsModule;

  beforeEach(() => {
    symbolsModule = new SymbolsModule();
  });

  it('should create an instance', () => {
    expect(symbolsModule).toBeTruthy();
  });
});
