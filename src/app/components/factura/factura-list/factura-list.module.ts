import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FacturaListComponent } from './factura-list.component';

const routes: Routes = [{ path: '', component: FacturaListComponent }];

@NgModule({
  declarations: [FacturaListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class FacturaListModule {}