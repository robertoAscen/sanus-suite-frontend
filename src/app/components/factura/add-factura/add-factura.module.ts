import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AddFacturaComponent } from './add-factura.component';
import { PacienteService } from 'src/app/services/paciente.service';

const routes: Routes = [{ path: '', component: AddFacturaComponent }];

@NgModule({
  declarations: [AddFacturaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
    providers: [PacienteService]
})
export class AddFacturaModule {}