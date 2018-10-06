import { TestBed } from '@angular/core/testing';

import { AyatService } from './ayat.service';

describe('AyatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AyatService = TestBed.get(AyatService);
    expect(service).toBeTruthy();
  });
});
