import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        // Para cuando entres vía /notas-evolucion o /notas-evolucion?pacienteId=X&expedienteId=Y
        path: '', 
        loadChildren: () => import('./add-nota-evolucion/addNota-evolucion.module').then((module) => module.AddNotaEvolucionModule)
      },
      {
        // Para cuando accedas vía /notas-evolucion/nueva
        path: 'nueva', 
        loadChildren: () => import('./add-nota-evolucion/addNota-evolucion.module').then((module) => module.AddNotaEvolucionModule)
      },
      {
        // Para cuando pases el parámetro directo en la URL /notas-evolucion/expediente/EXP-1001
        path: 'expediente/:numeroExpediente', 
        loadChildren: () => import('./add-nota-evolucion/addNota-evolucion.module').then((module) => module.AddNotaEvolucionModule)
      },
      // SOPORTE PARA NAVEGACIÓN CON PARÁMETRO EN LA URL
      {
        path: 'notasEvolucionList/:numeroExpediente',
        loadChildren: () => import('./nota-evolucion-list/nota-evolucion-list.module').then((module) => module.NotasEvolucionListModule)
      },
      // SOPORTE PARA NAVEGACIÓN SIN PARÁMETROS
      {
        path: 'notasEvolucionList',
        loadChildren: () => import('./nota-evolucion-list/nota-evolucion-list.module').then((module) => module.NotasEvolucionListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotaEvolucionRoutingModule {}