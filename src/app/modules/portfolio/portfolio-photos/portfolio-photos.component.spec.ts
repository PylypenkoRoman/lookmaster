import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPhotosComponent } from './portfolio-photos.component';

describe('PortfolioPhotosComponent', () => {
  let component: PortfolioPhotosComponent;
  let fixture: ComponentFixture<PortfolioPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
