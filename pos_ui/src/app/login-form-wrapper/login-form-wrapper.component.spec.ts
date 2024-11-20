import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormWrapperComponent } from './login-form-wrapper.component';

describe('LoginFormWrapperComponent', () => {
  let component: LoginFormWrapperComponent;
  let fixture: ComponentFixture<LoginFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
