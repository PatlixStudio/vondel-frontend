import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { apps, calendarOutline, trendingUpOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class DashboardPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ apps, calendarOutline, trendingUpOutline });
  }
}
