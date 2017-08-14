import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExtensionsComponent } from './profile-extensions.component';

describe('ProfileExtensionsComponent', () => {
  let component: ProfileExtensionsComponent;
  let fixture: ComponentFixture<ProfileExtensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileExtensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExtensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
