import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { appsOutline, logOutOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-navigation',
  imports: [IonicModule, CommonModule, TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  private auth = inject(AuthService);
  private router = inject(Router);

  isLoggedIn: Observable<boolean> = this.auth.isLoggedIn$;

  constructor() {
    addIcons({ personOutline, logOutOutline, appsOutline });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
