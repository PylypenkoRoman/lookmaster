import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditReactiveComponent } from './profile-edit-reactive.component';

describe('ProfileEditReactiveComponent', () => {
  let component: ProfileEditReactiveComponent;
  let fixture: ComponentFixture<ProfileEditReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
