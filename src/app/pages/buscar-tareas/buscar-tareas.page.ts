import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-buscar-tareas',
  templateUrl: './buscar-tareas.page.html',
  styleUrls: ['./buscar-tareas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonList, IonItemSliding, IonIcon, IonItemOption, IonItemOptions, IonLabel, IonAvatar, IonItem]
})
export class BuscarTareasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
