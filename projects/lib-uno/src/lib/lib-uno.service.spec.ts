import { TestBed } from '@angular/core/testing';

import { LibUnoService } from './lib-uno.service';

describe('LibUnoService', () => {
  let service: LibUnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibUnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
