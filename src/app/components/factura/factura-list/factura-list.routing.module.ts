import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaListComponent } from './factura-list.component';

const routes: Routes = [
  {
    path: '',
    component: FacturaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaListRoutingModule { }