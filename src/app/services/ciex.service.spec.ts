import { TestBed } from '@angular/core/testing';

import { CiexService } from './ciex.service';

describe('CiexService', () => {
  let service: CiexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
