import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasEvolucionListComponent } from './nota-evolucion-list.component';

const routes: Routes = [
  {
    path: '',
    component: NotasEvolucionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasEvolucionListRoutingModule { }