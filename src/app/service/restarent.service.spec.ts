import { TestBed, inject } from '@angular/core/testing';

import { RestarentService } from './restarent.service';

describe('RestarentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestarentService]
    });
  });

  it('should be created', inject([RestarentService], (service: RestarentService) => {
    expect(service).toBeTruthy();
  }));
});
