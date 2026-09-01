import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // <-- CRUCIAL PARA [formGroup]
import { RouterModule } from '@angular/router';  
import { SharedModule } from 'src/app/theme/shared/shared.module';     // <-- CRUCIAL PARA [routerLink]

import { AddNotaEvolucionComponent } from './addNota-evolucion.component'; // O la ruta correcta a tu .ts
import { AddNotaEvolucionRoutingModule } from './addNota-evolucion.routing.module';

@NgModule({
  declarations: [
    AddNotaEvolucionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AddNotaEvolucionRoutingModule,
    SharedModule
  ]
})
export class AddNotaEvolucionModule { }