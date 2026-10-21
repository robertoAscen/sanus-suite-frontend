import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { CitaResponseDto, EstadoCitaEnum } from 'src/app/models/cita.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cita-list',
  templateUrl: './cita-list.component.html',
  styleUrls: ['./cita-list.component.scss']
})
export class CitaListComponent implements OnInit {
  public citas: CitaResponseDto[] = [];
  public cargando: boolean = false;
  public fechaFiltro: string = new Date().toISOString().substring(0, 10);
  public EstadoCitaEnum = EstadoCitaEnum;

  constructor(
    private _citaService: CitaService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.cargarCitasDelDia();
  }

  cargarCitasDelDia(): void {
    this.cargando = true;
    const inicio = `${this.fechaFiltro}T00:00:00`;
    const fin = `${this.fechaFiltro}T23:59:59`;

    this._citaService.obtenerAgenda(inicio, fin).subscribe({
      next: (res: any) => {
        // Tu backend responde en la propiedad 'resultado'
        if (res && Array.isArray(res.resultado)) {
          this.citas = res.resultado;
        } else if (Array.isArray(res)) {
          this.citas = res;
        } else {
          this.citas = [];
        }
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar agenda:', err);
        this.cargando = false;
        Swal.fire('Error', 'No se pudieron obtener las citas de la agenda.', 'error');
      }
    });
  }

  // ACCIÓN CLAVE DE INTERCONEXIÓN: Transición Cita -> Nota de Evolución
  iniciarConsulta(cita: CitaResponseDto): void {
    Swal.fire({
      title: '¿Iniciar Consulta?',
      text: `Se cambiará el estado de la cita a EN CONSULTA para el paciente ${cita.pacienteNombre}.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, Iniciar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._citaService
          .cambiarEstado({
            citaId: cita.id,
            nuevoEstado: EstadoCitaEnum.EN_CONSULTA
          })
          .subscribe({
            next: () => {
              // Redirección inmediata al módulo de Nueva Nota de Evolución llevando el contexto
              this._router.navigate(['/notas-evolucion/nueva'], {
                queryParams: {
                  expedienteId: cita.numeroExpediente,
                  pacienteId: cita.pacienteId,
                  nombrePaciente: cita.pacienteNombre,
                  citaId: cita.id
                }
              });
            },
            error: (err) => {
              console.error('Error al actualizar estado:', err);
              Swal.fire('Error', 'No se pudo actualizar el estado de la cita.', 'error');
            }
          });
      }
    });
  }

  cambiarEstatus(citaId: number, nuevoEstado: EstadoCitaEnum): void {
    this._citaService.cambiarEstado({ citaId, nuevoEstado }).subscribe({
      next: () => {
        Swal.fire('Actualizado', 'Estado de cita actualizado.', 'success');
        this.cargarCitasDelDia();
      },
      error: () => Swal.fire('Error', 'No se pudo cambiar el estado.', 'error')
    });
  }
}
