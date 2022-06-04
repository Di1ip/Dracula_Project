import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserpageComponent } from './adminuserpage.component';

describe('AdminuserpageComponent', () => {
  let component: AdminuserpageComponent;
  let fixture: ComponentFixture<AdminuserpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminuserpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
