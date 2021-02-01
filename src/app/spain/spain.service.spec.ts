import { TestBed } from '@angular/core/testing';

import { SpainService } from './spain.service';

describe('SpainService', () => {
  let service: SpainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
