import { TestBed } from '@angular/core/testing';

import { ChiaFarmService } from './chia-farm.service';

describe('ChiaFarmService', () => {
  let service: ChiaFarmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChiaFarmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
