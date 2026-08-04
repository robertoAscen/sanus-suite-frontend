import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', // Para cuando entres a /historias-clinicas
        loadChildren: () => import('./add-historia-clinica/addHistoria-clinica.module').then((module) => module.AddHistoriaClinicaModule)
      },
      {
        path: 'expediente/:numeroExpediente', // Para cuando traigas el parámetro del paciente
        loadChildren: () => import('./add-historia-clinica/addHistoria-clinica.module').then((module) => module.AddHistoriaClinicaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriaClinicaRoutingModule {}