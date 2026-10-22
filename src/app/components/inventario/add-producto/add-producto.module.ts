import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AddProductoComponent } from './add-producto.component';

const routes: Routes = [{ path: '', component: AddProductoComponent }];

@NgModule({
  declarations: [AddProductoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes)]
})
export class AddProductoModule {}