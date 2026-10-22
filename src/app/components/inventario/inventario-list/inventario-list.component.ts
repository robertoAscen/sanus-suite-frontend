import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/services/inventario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventario-list',
  templateUrl: './inventario-list.component.html',
  styleUrls: ['./inventario-list.component.scss']
})
export class InventarioListComponent implements OnInit {
  public productos: any[] = [];
  public cargando: boolean = false;

  constructor(private _inventarioService: InventarioService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando = true;
    this._inventarioService.getProductosList().subscribe({
      next: (res: any) => {
        this.productos = res.resultado || res.datos || res.data || [];
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar inventario:', err);
        this.cargando = false;
        Swal.fire('Error', 'No se pudo obtener el inventario de productos.', 'error');
      }
    });
  }
}