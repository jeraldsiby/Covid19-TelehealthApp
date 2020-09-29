import { TestBed } from '@angular/core/testing';

import { CustomerCallService } from './customer-call.service';

describe('CustomerCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerCallService = TestBed.get(CustomerCallService);
    expect(service).toBeTruthy();
  });
});
