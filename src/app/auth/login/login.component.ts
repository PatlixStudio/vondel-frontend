import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';
import { keyOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  imports: [IonicModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);

  constructor() {
    addIcons({ keyOutline, personOutline });
  }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  submit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;

      this.auth.login({
        email: email!,
        password: password!,
      }).subscribe({
        next: (res) => console.log('Logged in!', res),
        error: (err) => console.error('Login error', err),
      });
    }
  }

}
