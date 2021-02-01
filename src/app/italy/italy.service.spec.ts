import { TestBed } from '@angular/core/testing';

import { ItalyService } from './italy.service';

describe('ItalyService', () => {
  let service: ItalyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItalyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
