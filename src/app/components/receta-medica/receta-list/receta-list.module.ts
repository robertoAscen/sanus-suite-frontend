import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

import { RecetaListComponent } from './receta-list.component';
import { RecetaListRoutingModule } from './receta-list-routing.module';

@NgModule({
  declarations: [
    RecetaListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    RouterModule,
    RecetaListRoutingModule,
    SharedModule
  ]
})
export class RecetaListModule { }