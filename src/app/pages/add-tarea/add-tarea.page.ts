import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonInput, IonItem, 
  IonList, IonMenuButton, IonModal, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ITarea } from 'src/app/interfaces/itarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.page.html',
  styleUrls: ['./add-tarea.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonItem, IonInput, 
    IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonDatetime, IonList, IonTextarea, IonButton]
})
export class AddTareaPage implements OnInit {
  tarea: ITarea = {};
  gestorTareas = inject(TareasService);

  constructor() { 
    this.tarea.estado = 'Pendiente';
    this.tarea.fechaLimite = new Date().toISOString();
  }

  ngOnInit() {
  }

  guardarTarea() {
    /* Se podría hacer función para guardar sólo la parte fecha y no la hora del string de fechaLimite
    const fecha = this.tarea.fechaLimite;

    const parteAntesDeT = fecha?.slice(0, fecha.indexOf('T'));
    //console.log("Fecha --> ", parteAntesDeT); // "2025-01-24"
    this.tarea.fechaLimite = parteAntesDeT;
    */

    console.log("Guardando Tarea", this.tarea);
    this.gestorTareas.addTarea(this.tarea);
  }

}
