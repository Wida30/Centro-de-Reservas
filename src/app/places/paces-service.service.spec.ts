import { TestBed } from '@angular/core/testing';

import { PacesServiceService } from './paces-service.service';

describe('PacesServiceService', () => {
  let service: PacesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
