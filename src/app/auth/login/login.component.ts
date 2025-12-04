import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';
import { keyOutline, personOutline } from 'ionicons/icons';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, IonicModule, ReactiveFormsModule, RouterModule, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  loginError: string | null = null;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor() {
    addIcons({ keyOutline, personOutline });

    this.form.valueChanges.subscribe(() => {
      if (this.loginError) {
        this.loginError = null;
      }
    });
  }

  submit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;

      this.auth.login({
        email: email!,
        password: password!,
      }).subscribe({
        next: (res) => {
          console.log('Logged in!', res);
          this.router.navigate(['/dashboard/tab1']);
        },
        error: (err) => {
          console.log(err.error.message);
          if (err?.error?.message) {
            this.loginError = err.error.message;
          } else {
            this.loginError = 'Login failed. Please try again.';
          }
        }
      });
    }
  }

  // Returns the error text for the email input
  getEmailErrorText(): string | null {
    const emailCtrl = this.form.get('email');
    if (!emailCtrl?.touched) return null;
    if (emailCtrl.hasError('required')) return 'Email is required';
    if (emailCtrl.hasError('email')) return 'Invalid email';
    return null;
  }

  // Returns the error text for the password input
  getPasswordErrorText(): string | null {
    const pwdCtrl = this.form.get('password');
    if (!pwdCtrl?.touched) return null;
    if (pwdCtrl.hasError('required')) return 'Password is required';
    return null;
  }

}
