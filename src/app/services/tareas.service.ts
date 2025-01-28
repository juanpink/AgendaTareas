import { Injectable } from '@angular/core';
import { Criticidad, ITarea } from '../interfaces/itarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  //private tareas : Array<ITarea> = [];
  private tareas : Array<ITarea> = [
    {"nombre": "Juanma", "descripcion": "comprar pan", "fechaLimite": "2025-01-28", "criticidad": Criticidad.ALTA, "estado": "Realizada"},
    {"nombre": "Lucia", "descripcion": "recoger coche", "fechaLimite": "2025-01-31", "criticidad": Criticidad.MEDIA, "estado": "Pendiente"},
    {"nombre": "Carlos", "descripcion": "ir al médico", "fechaLimite": "2025-02-27", "criticidad": Criticidad.BAJA, "estado": "Pendiente"}
  ];

  constructor() { }

  public addTarea(tarea : ITarea) {
    this.tareas.push({...tarea});
  }

  public getTareas() {
    return this.tareas;
  }
}
