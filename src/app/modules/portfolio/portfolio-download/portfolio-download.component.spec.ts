import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDownloadComponent } from './portfolio-download.component';

describe('PortfolioDownloadComponent', () => {
  let component: PortfolioDownloadComponent;
  let fixture: ComponentFixture<PortfolioDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
