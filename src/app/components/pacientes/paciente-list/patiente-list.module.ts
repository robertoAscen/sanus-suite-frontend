import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteListRoutingModule } from './paciente-list-routing.module';
import { PacienteListComponent } from './paciente-list.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [PacienteListComponent],
    imports: [
        CommonModule,
        PacienteListRoutingModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgbDatepickerModule,
    ]
})
export class PacienteListModule { }