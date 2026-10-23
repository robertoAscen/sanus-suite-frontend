import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'facturaList',
        pathMatch: 'full'
      },
      {
        path: 'facturaList',
        loadChildren: () => import('./factura-list/factura-list.module').then((m) => m.FacturaListModule)
      },
      {
        path: 'addFactura',
        loadChildren: () => import('./add-factura/add-factura.module').then((m) => m.AddFacturaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule {}