import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { CitaListRoutingModule } from './cita-list-routing.module';
import { CitaListComponent } from './cita-list.component';

@NgModule({
  declarations: [CitaListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CitaListRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class CitaListModule { }