import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainContentHeaderComponent } from './admin-main-content-header.component';

describe('AdminMainContentHeaderComponent', () => {
  let component: AdminMainContentHeaderComponent;
  let fixture: ComponentFixture<AdminMainContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMainContentHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMainContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
