import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerDashbaordComponent } from './employer-dashbaord.component';

describe('EmployerDashbaordComponent', () => {
  let component: EmployerDashbaordComponent;
  let fixture: ComponentFixture<EmployerDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerDashbaordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
