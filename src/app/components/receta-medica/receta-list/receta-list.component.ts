import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecetaMedicaService } from 'src/app/services/receta-medica.service';
import { RecetaMedicaResponseDto } from 'src/app/models/receta.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.scss']
})
export class RecetaListComponent implements OnInit, OnDestroy {
  public title = 'Histórico de Recetas Médicas';
  public recetas: RecetaMedicaResponseDto[] = [];
  public recetaSeleccionada: RecetaMedicaResponseDto | null = null;
  public expedienteParam: string | null = null;
  public loading = true;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private recetaService: RecetaMedicaService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      responsive: true,
      order: [[0, 'desc']]
    };

    this.route.paramMap.subscribe(params => {
      const expediente = params.get('numeroExpediente');
      if (expediente) {
        this.expedienteParam = expediente;
        this.cargarRecetasPorExpediente(expediente);
      } else {
        this.cargarTodasLasRecetas();
      }
    });
  }

  cargarRecetasPorExpediente(numExpediente: string): void {
    this.loading = true;
    this.recetaService.obtenerPorNumeroExpediente(numExpediente).subscribe({
      next: (res) => {
        this.loading = false;
        this.recetas = res && res.resultado ? res.resultado : [];
        this.dtTrigger.next(null);
      },
      error: (err) => {
        this.loading = false;
        console.error('Error al cargar recetas:', err);
        Swal.fire('¡Error!', 'No se pudieron consultar las recetas del expediente.', 'error');
      }
    });
  }

  cargarTodasLasRecetas(): void {
    this.loading = true;
    this.recetaService.listarTodas().subscribe({
      next: (res) => {
        this.loading = false;
        this.recetas = res && res.resultado ? res.resultado : [];
        this.dtTrigger.next(null);
      },
      error: (err) => {
        this.loading = false;
        console.error('Error al listar recetas:', err);
      }
    });
  }

  verDetalle(modalContent: TemplateRef<any>, receta: RecetaMedicaResponseDto): void {
    this.recetaSeleccionada = receta;
    this.modalService.open(modalContent, { size: 'lg', centered: true, scrollable: true });
  }

  descargarPdf(id: number): void {
    this.recetaService.obtenerPdf(id).subscribe({
      next: (blob) => {
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL, '_blank');
      },
      error: (err) => {
        console.error('Error al descargar PDF de receta:', err);
        Swal.fire('¡Error!', 'No se pudo generar el PDF de la receta.', 'error');
      }
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}