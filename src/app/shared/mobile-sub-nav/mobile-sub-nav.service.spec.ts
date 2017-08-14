import { TestBed, inject } from '@angular/core/testing';

import { MobileSubNavService } from './mobile-sub-nav.service';

describe('MobileSubNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileSubNavService]
    });
  });

  it('should be created', inject([MobileSubNavService], (service: MobileSubNavService) => {
    expect(service).toBeTruthy();
  }));
});
