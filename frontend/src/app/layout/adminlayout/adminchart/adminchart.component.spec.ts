import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchartComponent } from './adminchart.component';

describe('AdminchartComponent', () => {
  let component: AdminchartComponent;
  let fixture: ComponentFixture<AdminchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
