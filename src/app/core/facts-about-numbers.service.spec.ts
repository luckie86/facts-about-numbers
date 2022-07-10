import { TestBed } from '@angular/core/testing';

import { FactsAboutNumbersService } from './facts-about-numbers.service';

describe('FactsAboutNumbersService', () => {
  let service: FactsAboutNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactsAboutNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
