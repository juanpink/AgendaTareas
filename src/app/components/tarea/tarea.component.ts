import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Criticidad, ITarea } from 'src/app/interfaces/itarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
  imports: [NgStyle]
})
export class TareaComponent  implements OnInit {
  @Input() tarea : ITarea = {};

  colorCriticidad: string = "";
  criticidad: Criticidad = Criticidad.BAJA;

  estiloEstado = { };
  estiloPendiente = { color: "aqua" };
  estiloRealizada = { color: "gold" };

  constructor() { }

  ngOnInit() {
    if (this.tarea.criticidad == Criticidad.ALTA) {
      this.colorCriticidad = "alta";
    } else if (this.tarea.criticidad == Criticidad.MEDIA)
      {
        this.colorCriticidad = "media";
      } else if (this.tarea.criticidad == Criticidad.BAJA)
        {
          this.colorCriticidad = "baja";
        }

    switch (this.tarea.estado) {
      case "Pendiente":
        this.estiloEstado = this.estiloPendiente;
        break;
      case "Realizada":
        this.estiloEstado = this.estiloRealizada;
        break;
    }
    
  }

}
