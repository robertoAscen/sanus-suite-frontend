import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotaEvolucionComponent } from './addNota-evolucion.component';

const routes: Routes = [
  {
    path: '',
    component: AddNotaEvolucionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNotaEvolucionRoutingModule { }