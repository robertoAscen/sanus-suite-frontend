import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // <-- CRUCIAL PARA [formGroup]
import { RouterModule } from '@angular/router';  
import { SharedModule } from 'src/app/theme/shared/shared.module';     // <-- CRUCIAL PARA [routerLink]

import { AddHistoriaClinicaComponent } from './addHistoria-clinica.component'; // O la ruta correcta a tu .ts
import { AddHistoriaClinicaRoutingModule } from './addHistoria-clinica.routing.module';

@NgModule({
  declarations: [
    AddHistoriaClinicaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AddHistoriaClinicaRoutingModule,
    SharedModule
  ]
})
export class AddHistoriaClinicaModule { }