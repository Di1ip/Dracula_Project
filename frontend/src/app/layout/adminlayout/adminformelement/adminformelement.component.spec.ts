import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminformelementComponent } from './adminformelement.component';

describe('AdminformelementComponent', () => {
  let component: AdminformelementComponent;
  let fixture: ComponentFixture<AdminformelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminformelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminformelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
