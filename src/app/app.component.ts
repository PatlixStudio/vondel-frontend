import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { NavigationComponent } from "./navigation/navigation.component";
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, NavigationComponent],
})
export class AppComponent {
  private auth = inject(AuthService);

  constructor() {
    this.auth.checkLogin(); // restores state from localStorage
  }
}
