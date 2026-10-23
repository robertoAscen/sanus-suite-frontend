import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.scss']
})
export class FacturaListComponent implements OnInit {
  public facturas: any[] = [];
  public cargando: boolean = false;

  constructor(private _facturaService: FacturaService) {}

  ngOnInit(): void {
    this.cargarFacturas();
  }

  cargarFacturas(): void {
    this.cargando = true;
    this._facturaService.getFacturasList().subscribe({
      next: (res: any) => {
        this.facturas = res.resultado || res.datos || res.data || [];
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar notas de venta:', err);
        this.cargando = false;
        Swal.fire('Error', 'No se pudieron cargar las notas de venta.', 'error');
      }
    });
  }
}