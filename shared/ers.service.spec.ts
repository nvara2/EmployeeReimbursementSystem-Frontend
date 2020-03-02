import { TestBed } from '@angular/core/testing';

import { ErsService } from './ers.service';

describe('ErsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErsService = TestBed.get(ErsService);
    expect(service).toBeTruthy();
  });
});
