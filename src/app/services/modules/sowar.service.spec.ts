import { TestBed } from '@angular/core/testing';

import { SowarService } from './sowar.service';

describe('SowarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SowarService = TestBed.get(SowarService);
    expect(service).toBeTruthy();
  });
});
