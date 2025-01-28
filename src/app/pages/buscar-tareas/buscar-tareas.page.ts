import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButtons, IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ITarea } from 'src/app/interfaces/itarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-buscar-tareas',
  templateUrl: './buscar-tareas.page.html',
  styleUrls: ['./buscar-tareas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonList, IonItemSliding, IonItemOption, IonItemOptions, IonLabel, IonAvatar, IonItem]
})
export class BuscarTareasPage implements OnInit {
  gestorTareas = inject(TareasService);
  private tareasFiltradas : Array<ITarea> = this.gestorTareas.getTareas();
  
  constructor() { }

  ngOnInit() {
  }

  verEstado(estado : string) {
    console.log("VER ESTADO --> ", estado);
    console.log("Tareas --> ", this.tareasFiltradas)
  }

}
