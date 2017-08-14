import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSubNavComponent } from './mobile-sub-nav.component';

describe('MobileSubNavComponent', () => {
  let component: MobileSubNavComponent;
  let fixture: ComponentFixture<MobileSubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
