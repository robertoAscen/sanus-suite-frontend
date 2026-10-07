import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecetaMedicaComponent } from './addReceta-medica.component';

const routes: Routes = [
  {
    path: '',
    component: AddRecetaMedicaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRecetaMedicaRoutingModule { }