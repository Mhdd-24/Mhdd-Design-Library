import { TestBed } from '@angular/core/testing';

import { MhddLibraryService } from './mhdd-library.service';

describe('MhddLibraryService', () => {
  let service: MhddLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MhddLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
