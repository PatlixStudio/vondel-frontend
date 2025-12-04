import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';
import { keyOutline, personOutline, atOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  imports: [IonicModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    addIcons({ keyOutline, personOutline, atOutline });
  }


  form = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  submit() {
    if (this.form.valid) {
      const { username, email, password } = this.form.value;

      this.authService.register({
        username: username!,
        email: email!,
        password: password!,
      }).subscribe({
        next: (res) => {
          console.log('Registered!', res);
          this.router.navigate(['/login']);
        },
        error: (err) => console.error('Registration error', err),
      });
    }
  }
}
