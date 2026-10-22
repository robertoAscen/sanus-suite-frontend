import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'inventarioList', pathMatch: 'full' },
      {
        path: 'inventarioList',
        loadChildren: () => import('./inventario-list/inventario-list.module').then((m) => m.InventarioListModule)
      },
      {
        path: 'addProducto',
        loadChildren: () => import('./add-producto/add-producto.module').then((m) => m.AddProductoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule {}