import { TestBed } from '@angular/core/testing';

import { NasaNeoService } from './nasa-neo.service';

describe('NasaNeoService', () => {
  let service: NasaNeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaNeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
