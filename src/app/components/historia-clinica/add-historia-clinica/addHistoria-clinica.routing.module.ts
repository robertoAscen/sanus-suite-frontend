import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHistoriaClinicaComponent } from './addHistoria-clinica.component';

const routes: Routes = [
  {
    path: '',
    component: AddHistoriaClinicaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddHistoriaClinicaRoutingModule { }