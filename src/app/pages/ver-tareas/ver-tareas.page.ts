import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TareasService } from 'src/app/services/tareas.service';
import { TareaComponent } from 'src/app/components/tarea/tarea.component';

@Component({
  selector: 'app-ver-tareas',
  templateUrl: './ver-tareas.page.html',
  styleUrls: ['./ver-tareas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonItem, IonList, TareaComponent]
})
export class VerTareasPage implements OnInit {
  //definir tareas

  gestorTareas = inject(TareasService);
  tareas = this.gestorTareas.getTareas();

  constructor() { }

  ngOnInit() {
  }

}
