import { TestBed } from '@angular/core/testing';

import { UkraineService } from './ukraine.service';

describe('UkraineService', () => {
  let service: UkraineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UkraineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
