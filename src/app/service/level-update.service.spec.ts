import { TestBed, inject } from '@angular/core/testing';

import { LevelUpdateService } from './level-update.service';

describe('LevelUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LevelUpdateService]
    });
  });

  it('should be created', inject([LevelUpdateService], (service: LevelUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
