import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalstatsComponent } from './globalstats.component';

describe('GlobalstatsComponent', () => {
  let component: GlobalstatsComponent;
  let fixture: ComponentFixture<GlobalstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalstatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
