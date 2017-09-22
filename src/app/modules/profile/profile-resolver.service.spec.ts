import { TestBed, inject } from '@angular/core/testing';

import { ProfileResolver } from './profile-resolver.service';

describe('ProfileResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileResolver]
    });
  });

  it('should be created', inject([ProfileResolver], (service: ProfileResolver) => {
    expect(service).toBeTruthy();
  }));
});
