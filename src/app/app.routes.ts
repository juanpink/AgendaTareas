import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ver-tareas',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'creditos',
    loadComponent: () => import('./pages/creditos/creditos.page').then( m => m.CreditosPage)
  },
  {
    path: 'add-tarea',
    loadComponent: () => import('./pages/add-tarea/add-tarea.page').then( m => m.AddTareaPage)
  },
  {
    path: 'ver-tareas',
    loadComponent: () => import('./pages/ver-tareas/ver-tareas.page').then( m => m.VerTareasPage)
  },
  {
    path: 'buscar-tareas',
    loadComponent: () => import('./pages/buscar-tareas/buscar-tareas.page').then( m => m.BuscarTareasPage)
  },
];
