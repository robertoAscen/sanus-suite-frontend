import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AddPacienteComponent } from './add-paciente.component';

const routes: Routes = [
    {
        path:'',
        component: AddPacienteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddPacienteRoutingModule{}