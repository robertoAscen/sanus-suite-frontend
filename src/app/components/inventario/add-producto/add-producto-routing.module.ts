import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AddProductoComponent } from './add-producto.component';

const routes: Routes = [
    {
        path:'',
        component: AddProductoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddProductoRoutingModule{}