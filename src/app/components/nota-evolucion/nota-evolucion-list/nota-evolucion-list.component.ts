import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotaEvolucionService } from 'src/app/services/nota-evolucion.service';
import { NotaEvolucionListDto } from 'src/app/models/nota-evolucion.model';

@Component({
  selector: 'app-historico-notas-evolucion',
  templateUrl: './nota-evolucion-list.component.html',
  styleUrls: ['./nota-evolucion-list.component.scss']
})
export class NotasEvolucionListComponent implements OnInit, OnDestroy {
  title = 'Histórico de Notas de Evolución';
  pacienteNombre: string = '';
  notas: NotaEvolucionListDto[] = [];
  expedienteParam: string | null = null;
  notaSeleccionada: NotaEvolucionListDto | null = null;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private notaService: NotaEvolucionService,
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

    this.route.paramMap.subscribe((params) => {
      const expediente = params.get('numeroExpediente');

      if (expediente) {
        this.expedienteParam = expediente;
        this.cargarNotasPorExpediente(expediente);
      }
    });
  }

  cargarNotasPorExpediente(expediente: string): void {
    this.notaService.obtenerPorNumeroExpediente(expediente).subscribe({
      next: (response: any) => {
        // 1. Extraer el array desde la propiedad 'resultado'
        this.notas = response && response.resultado ? response.resultado : [];

        // 2. Extraer el nombre del paciente y actualizar el título
        if (this.notas.length > 0) {
          this.pacienteNombre = this.notas[0].nombrePaciente || '';
          this.title = `Notas de Evolución - ${this.pacienteNombre}`;
        } else {
          this.title = `Notas de Evolución - Expediente: ${expediente}`;
        }

        // 3. Notificar a DataTables para renderizar las filas
        if (this.dtTrigger) {
          this.dtTrigger.next(null);
        }
      },
      error: (err) => {
        console.error('Error al obtener notas:', err);
        this.notas = [];
      }
    });
  }

  // Abrir modal con la nota seleccionada
  verDetalleSOAP(modalContent: TemplateRef<any>, nota: NotaEvolucionListDto): void {
    this.notaSeleccionada = nota;
    this.modalService.open(modalContent, { size: 'lg', centered: true, scrollable: true });
  }

  editarNota(nota: NotaEvolucionListDto): void {
    this.modalService.dismissAll();
    this.router.navigate(['/notas-evolucion/nueva'], {
      queryParams: {
        id: nota.id,
        pacienteId: nota.pacienteId,
        expedienteId: nota.numeroExpediente,
        nombrePaciente: nota.nombrePaciente
      }
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}