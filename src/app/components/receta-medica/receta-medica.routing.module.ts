import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./add-receta-medica/addReceta-medica.module').then((m) => m.AddRecetaMedicaModule)
      },
      {
        path: 'nueva',
        loadChildren: () => import('./add-receta-medica/addReceta-medica.module').then((m) => m.AddRecetaMedicaModule)
      },
      // SOPORTE PARA EL LISTADO DE RECETAS
      {
        path: 'recetasList/:numeroExpediente',
        loadChildren: () => import('./receta-list/receta-list.module').then((m) => m.RecetaListModule)
      },
      {
        path: 'recetasList',
        loadChildren: () => import('./receta-list/receta-list.module').then((m) => m.RecetaListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetaMedicaRoutingModule {}