import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddQueComponent } from './admin-add-que.component';

describe('AdminAddQueComponent', () => {
  let component: AdminAddQueComponent;
  let fixture: ComponentFixture<AdminAddQueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddQueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
