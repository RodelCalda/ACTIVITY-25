import { TestBed } from '@angular/core/testing';

import { SimplePrinterService } from './simple-printer.service';

describe('SimplePrinterService', () => {
  let service: SimplePrinterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplePrinterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
