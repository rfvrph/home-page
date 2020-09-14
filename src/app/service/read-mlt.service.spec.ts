import { TestBed } from '@angular/core/testing';

import { ReadMltService } from './read-mlt.service';

describe('ReadMltService', () => {
  let service: ReadMltService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadMltService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
