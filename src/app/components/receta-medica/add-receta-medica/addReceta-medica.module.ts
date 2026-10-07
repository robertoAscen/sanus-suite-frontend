import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // <-- CRUCIAL PARA [formGroup]
import { RouterModule } from '@angular/router';  
import { SharedModule } from 'src/app/theme/shared/shared.module';     // <-- CRUCIAL PARA [routerLink]

import { AddRecetaMedicaComponent } from './addReceta-medica.component'; // O la ruta correcta a tu .ts
import { AddRecetaMedicaRoutingModule } from './addReceta-medica.routing.module';

@NgModule({
  declarations: [
    AddRecetaMedicaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AddRecetaMedicaRoutingModule,
    SharedModule
  ]
})
export class AddRecetaMedicaModule { }