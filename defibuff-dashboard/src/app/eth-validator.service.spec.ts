import { TestBed } from '@angular/core/testing';

import { EthValidatorService } from './eth-validator.service';

describe('EthValidatorService', () => {
  let service: EthValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EthValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make the request', () => {
    expect(service.requestValidatorStatus("1")).toBeDefined();
  })
});
