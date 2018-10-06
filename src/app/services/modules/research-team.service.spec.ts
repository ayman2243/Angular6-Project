import { TestBed } from '@angular/core/testing';

import { ResearchTeamService } from './research-team.service';

describe('ResearchTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResearchTeamService = TestBed.get(ResearchTeamService);
    expect(service).toBeTruthy();
  });
});
