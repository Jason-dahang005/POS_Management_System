import { Component } from '@angular/core';
import { LoginFormWrapperComponent } from '../login-form-wrapper/login-form-wrapper.component';
import { NameInputFieldComponent } from '../name-input-field/name-input-field.component';
import { PasswordInputFieldComponent } from '../password-input-field/password-input-field.component';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
import { ForgotPasswordLinkComponent } from '../forgot-password-link/forgot-password-link.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormWrapperComponent,
    NameInputFieldComponent,
    PasswordInputFieldComponent,
    SubmitButtonComponent,
    ForgotPasswordLinkComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
