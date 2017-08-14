import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileScheduleComponent } from './profile-schedule.component';

describe('ProfileScheduleComponent', () => {
  let component: ProfileScheduleComponent;
  let fixture: ComponentFixture<ProfileScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
