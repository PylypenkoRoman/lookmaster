import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoNavComponent } from './profile-info-nav.component';

describe('ProfileInfoNavComponent', () => {
  let component: ProfileInfoNavComponent;
  let fixture: ComponentFixture<ProfileInfoNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
