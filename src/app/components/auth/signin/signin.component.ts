import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  constructor(private authService: AuthService) {}

  email = new FormControl('', [Validators.email, Validators.required]);

  password = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  onSubmit() {
    console.log(this.loginForm.value);
    const email: string = this.loginForm.value.email!;
    const password: string = this.loginForm.value.password!;
    this.authService.onSignIn(email, password).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
