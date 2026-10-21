import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'citaList',
        pathMatch: 'full'
      },
      {
        path: 'citaList',
        loadChildren: () => import('./cita-list/cita-list.module').then((m) => m.CitaListModule)
      },
      {
        path: 'add-cita',
        loadChildren: () => import('./add-cita/add-cita.module').then((m) => m.AddCitaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule {}