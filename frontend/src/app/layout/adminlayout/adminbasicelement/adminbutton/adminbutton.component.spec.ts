import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbuttonComponent } from './adminbutton.component';

describe('AdminbuttonComponent', () => {
  let component: AdminbuttonComponent;
  let fixture: ComponentFixture<AdminbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
