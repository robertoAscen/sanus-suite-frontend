import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { AddCitaRoutingModule } from './add-cita-routing.module';
import { AddCitaComponent } from './add-cita.component';
import { PacienteService } from 'src/app/services/paciente.service';

@NgModule({
  declarations: [AddCitaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AddCitaRoutingModule
  ],
  providers: [PacienteService]
})
export class AddCitaModule {}