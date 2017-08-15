import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCardEditComponent } from './work-card-edit.component';

describe('WorkCardEditComponent', () => {
  let component: WorkCardEditComponent;
  let fixture: ComponentFixture<WorkCardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
