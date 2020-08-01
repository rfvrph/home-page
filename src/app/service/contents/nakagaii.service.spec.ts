import { TestBed } from '@angular/core/testing';

import { NakagaiiService } from './nakagaii.service';

describe('NakagaiiService', () => {
  let service: NakagaiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NakagaiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
