import { TestBed } from '@angular/core/testing';

import { SettigService } from './settig.service';

describe('SettigService', () => {
  let service: SettigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
