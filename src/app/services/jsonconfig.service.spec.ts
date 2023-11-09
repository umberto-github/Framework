import { TestBed } from '@angular/core/testing';

import { JsonconfigService } from './jsonconfig.service';

describe('JsonconfigService', () => {
  let service: JsonconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
