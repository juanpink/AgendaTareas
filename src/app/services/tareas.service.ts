import { Injectable } from '@angular/core';
import { ITarea } from '../interfaces/itarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareas : Array<ITarea> = [];

  constructor() { }

  public addTarea(tarea : ITarea) {
    this.tareas.push({...tarea});
  }

  public getTareas() {
    return this.tareas;
  }
}
