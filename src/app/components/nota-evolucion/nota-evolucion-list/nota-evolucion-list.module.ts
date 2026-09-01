import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // <-- CRUCIAL PARA [formGroup]
import { RouterModule } from '@angular/router';  
import { SharedModule } from 'src/app/theme/shared/shared.module';     // <-- CRUCIAL PARA [routerLink]
import { DataTablesModule } from 'angular-datatables';

import { NotasEvolucionListComponent } from './nota-evolucion-list.component'; // O la ruta correcta a tu .ts
import { NotasEvolucionListRoutingModule } from './nota-evolucion-list.routing.module';

@NgModule({
  declarations: [
    NotasEvolucionListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    RouterModule,
    NotasEvolucionListRoutingModule,
    SharedModule
  ]
})
export class NotasEvolucionListModule { }