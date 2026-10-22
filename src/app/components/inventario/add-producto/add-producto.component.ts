import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioService } from 'src/app/services/inventario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss']
})
export class AddProductoComponent implements OnInit {
  public productoForm!: FormGroup;
  public cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _inventarioService: InventarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      codigo: [''],
      descripcion: [''],
      precioCompra: [0, [Validators.min(0)]],
      precioVenta: [0, [Validators.required, Validators.min(0)]],
      stockActual: [10, [Validators.required, Validators.min(0)]],
      stockMinimo: [3, [Validators.required, Validators.min(0)]]
    });
  }

  guardarProducto(): void {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    this.cargando = true;
    this._inventarioService.crearProducto(this.productoForm.value).subscribe({
      next: () => {
        this.cargando = false;
        Swal.fire('¡Éxito!', 'Producto registrado en el inventario.', 'success');
        this.router.navigate(['/inventario/inventarioList']);
      },
      error: (err) => {
        this.cargando = false;
        console.error('Error al registrar producto:', err);
        Swal.fire('Error', 'No se pudo guardar el producto.', 'error');
      }
    });
  }
}