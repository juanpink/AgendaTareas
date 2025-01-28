export interface ITarea {
    nombre?: string,
    descripcion?: string,
    fechaLimite?: string,
    criticidad?: Criticidad,
    estado?: "Pendiente" | "Realizada"
}

export enum Criticidad {
    BAJA = "Baja",
    MEDIA = "Media",
    ALTA = "Alta"
}
