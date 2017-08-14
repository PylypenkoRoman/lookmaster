import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNotificationsSettingsComponent } from './profile-notifications-settings.component';

describe('ProfileNotificationsSettingsComponent', () => {
  let component: ProfileNotificationsSettingsComponent;
  let fixture: ComponentFixture<ProfileNotificationsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileNotificationsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNotificationsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
