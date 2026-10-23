import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public resumen: any = {
    totalPacientes: 0,
    totalFacturas: 0,
    ingresosTotales: 0,
    productosStockBajo: 0
  };
  public cargando: boolean = false;

  constructor(private _dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.cargarResumen();
  }

  cargarResumen(): void {
    this.cargando = true;
    this._dashboardService.getResumenDashboard().subscribe({
      next: (res: any) => {
        this.resumen = res.resultado || res.datos || res.data || this.resumen;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar resumen del dashboard:', err);
        this.cargando = false;
      }
    });
  }
}