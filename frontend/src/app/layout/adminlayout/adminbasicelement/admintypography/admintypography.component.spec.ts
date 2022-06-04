import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintypographyComponent } from './admintypography.component';

describe('AdmintypographyComponent', () => {
  let component: AdmintypographyComponent;
  let fixture: ComponentFixture<AdmintypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintypographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
