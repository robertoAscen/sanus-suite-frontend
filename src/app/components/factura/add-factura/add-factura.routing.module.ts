import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFacturaModule } from './add-factura.module';

const routes: Routes = [
  {
    path: '',
    component: AddFacturaModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFacturaRoutingModule { }