import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminiconComponent } from './adminicon.component';

describe('AdminiconComponent', () => {
  let component: AdminiconComponent;
  let fixture: ComponentFixture<AdminiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
