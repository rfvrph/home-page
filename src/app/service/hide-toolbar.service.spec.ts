import { TestBed } from '@angular/core/testing';

import { HideToolbarService } from './hide-toolbar.service';

describe('HideToolberService', () => {
  let service: HideToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
