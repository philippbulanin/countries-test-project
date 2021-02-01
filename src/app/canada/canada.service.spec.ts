import { TestBed } from '@angular/core/testing';

import { CanadaService } from './canada.service';

describe('CanadaService', () => {
  let service: CanadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
