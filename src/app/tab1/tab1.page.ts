import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonCol, IonGrid, IonRow, IonIcon, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barbellOutline, calendarNumberOutline, chatboxEllipsesOutline, helpCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonGrid,
    IonCol,
    IonRow,
    IonButton,
    IonCard,
    IonTitle,
    IonIcon,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent
  ],
})
export class Tab1Page {
  constructor() {
    addIcons({ chatboxEllipsesOutline, helpCircleOutline, calendarNumberOutline, barbellOutline });
  }
}
