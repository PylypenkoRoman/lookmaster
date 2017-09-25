import { TestBed, inject } from '@angular/core/testing';

import { AuthResolver } from './auth-resolver.service';

describe('AuthResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthResolver]
    });
  });

  it('should be created', inject([AuthResolver], (service: AuthResolver) => {
    expect(service).toBeTruthy();
  }));
});
