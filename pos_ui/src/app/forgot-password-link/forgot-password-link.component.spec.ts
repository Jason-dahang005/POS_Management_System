import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordLinkComponent } from './forgot-password-link.component';

describe('ForgotPasswordLinkComponent', () => {
  let component: ForgotPasswordLinkComponent;
  let fixture: ComponentFixture<ForgotPasswordLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
