import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPacienteRoutingModule } from './add-paciente-routing.module';
import { AddPacienteComponent } from './add-paciente.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        AddPacienteRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        NgbDatepickerModule
    ],
    declarations: [AddPacienteComponent]
})
export class AddPacienteModule{}