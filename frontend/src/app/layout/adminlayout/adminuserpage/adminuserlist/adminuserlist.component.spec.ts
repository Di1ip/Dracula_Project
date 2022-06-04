import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserlistComponent } from './adminuserlist.component';

describe('AdminuserlistComponent', () => {
  let component: AdminuserlistComponent;
  let fixture: ComponentFixture<AdminuserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminuserlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
