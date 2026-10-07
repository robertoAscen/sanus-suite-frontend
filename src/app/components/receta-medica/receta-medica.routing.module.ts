import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        // Para cuando entres vía /notas-evolucion o /notas-evolucion?pacienteId=X&expedienteId=Y
        path: '', 
        loadChildren: () => import('./add-receta-medica/addReceta-medica.module').then((module) => module.AddRecetaMedicaModule)
      },
      {
        // Para cuando entres vía /notas-evolucion o /notas-evolucion?pacienteId=X&expedienteId=Y
        path: 'nueva', 
        loadChildren: () => import('./add-receta-medica/addReceta-medica.module').then((module) => module.AddRecetaMedicaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetaMedicaRoutingModule {}