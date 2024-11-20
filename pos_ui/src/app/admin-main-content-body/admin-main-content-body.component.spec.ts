import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainContentBodyComponent } from './admin-main-content-body.component';

describe('AdminMainContentBodyComponent', () => {
  let component: AdminMainContentBodyComponent;
  let fixture: ComponentFixture<AdminMainContentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMainContentBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMainContentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
