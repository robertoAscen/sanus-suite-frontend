import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addPatient',
        loadChildren: () => import('./add-paciente/add-paciente.module').then((module) => module.AddPacienteModule)
      },
      {
        path: 'patientList',
        loadChildren: () => import('./paciente-list/patiente-list.module').then((module) => module.PacienteListModule)
      },
      // 1. RUTA PARA EDITAR PACIENTE
      {
        path: 'editPatient/:id',
        loadChildren: () => import('./add-paciente/add-paciente.module').then((module) => module.AddPacienteModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule {}