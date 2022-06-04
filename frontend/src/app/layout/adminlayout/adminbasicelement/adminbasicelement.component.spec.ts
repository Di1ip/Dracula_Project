import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbasicelementComponent } from './adminbasicelement.component';

describe('AdminbasicelementComponent', () => {
  let component: AdminbasicelementComponent;
  let fixture: ComponentFixture<AdminbasicelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbasicelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbasicelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
