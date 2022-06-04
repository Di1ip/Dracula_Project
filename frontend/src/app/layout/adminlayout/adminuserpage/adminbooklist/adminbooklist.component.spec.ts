import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbooklistComponent } from './adminbooklist.component';

describe('AdminbooklistComponent', () => {
  let component: AdminbooklistComponent;
  let fixture: ComponentFixture<AdminbooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbooklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
