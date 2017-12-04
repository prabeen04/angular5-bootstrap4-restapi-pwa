import { TestBed, inject } from '@angular/core/testing';

import { CoteService } from './cote.service';

describe('CoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoteService]
    });
  });

  it('should be created', inject([CoteService], (service: CoteService) => {
    expect(service).toBeTruthy();
  }));
});
