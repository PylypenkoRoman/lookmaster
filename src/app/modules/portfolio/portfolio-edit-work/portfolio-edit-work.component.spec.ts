import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEditWorkComponent } from './portfolio-edit-work.component';

describe('PortfolioEditWorkComponent', () => {
  let component: PortfolioEditWorkComponent;
  let fixture: ComponentFixture<PortfolioEditWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioEditWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioEditWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
