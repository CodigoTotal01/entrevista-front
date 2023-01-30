import { TestBed } from '@angular/core/testing';

import { BusquedasService } from './busquedas-service.service';

describe('BusquedasServiceService', () => {
  let service: BusquedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
