import { TestBed } from '@angular/core/testing';

import { JSONReaderserviceService } from './jsonreaderservice.service';

describe('JSONReaderserviceService', () => {
  let service: JSONReaderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONReaderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
