
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, addSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp,
  bodyOutline, bodySharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, 
  eyeOutline, eyeSharp, searchCircleOutline, searchCircleSharp} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Añadir Tarea', url: '/add-tarea', icon: 'add' },
    { title: 'Ver Tareas', url: '/ver-tareas', icon: 'eye' },
    { title: 'Buscar Tareas', url: '/buscar-tareas', icon: 'search-circle' },
    { title: 'Créditos', url: '/creditos', icon: 'body' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ addOutline, addSharp, paperPlaneOutline, paperPlaneSharp, eyeOutline, eyeSharp, searchCircleOutline, searchCircleSharp,
      heartOutline, heartSharp, bodyOutline, bodySharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
