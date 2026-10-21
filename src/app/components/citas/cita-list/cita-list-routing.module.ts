import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaListComponent } from './cita-list.component';

const routes: Routes = [
  {
    path: '',
    component: CitaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaListRoutingModule { }