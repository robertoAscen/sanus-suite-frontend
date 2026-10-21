import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { PacienteService } from 'src/app/services/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.scss']
})
export class AddCitaComponent implements OnInit {
  public citaForm!: FormGroup;
  public pacientes: any[] = [];
  public cargando: boolean = false;
  public pacientePreseleccionadoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private _citaService: CitaService,
    private _pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();

    // Suscribirse a queryParams e INMEDIATAMENTE cargar los pacientes
    this.route.queryParams.subscribe((params) => {
      if (params['pacienteId']) {
        this.pacientePreseleccionadoId = Number(params['pacienteId']);
      }
      this.cargarPacientes();
    });
  }

  private initForm(): void {
    const ahora = new Date();
    const fechaDefecto = ahora.toISOString().substring(0, 10);
    const horaDefecto = ahora.toTimeString().substring(0, 5);

    this.citaForm = this.fb.group({
      pacienteId: [this.pacientePreseleccionadoId || '', [Validators.required]],
      fecha: [fechaDefecto, [Validators.required]],
      horaInicio: [horaDefecto, [Validators.required]],
      duracionMinutos: [30, [Validators.required]],
      motivoConsulta: ['', [Validators.maxLength(500)]],
      observaciones: ['']
    });
  }

  cargarPacientes(): void {
    this._pacienteService.getPatientList().subscribe({
      next: (res: any) => {
        // Tu backend devuelve la lista en la propiedad 'resultado'
        if (res && Array.isArray(res.resultado)) {
          this.pacientes = res.resultado;
        } else if (Array.isArray(res)) {
          this.pacientes = res;
        } else {
          this.pacientes = [];
        }

        // Si venía un pacienteId por queryParam (ej. desde Notas), seleccionarlo automáticamente
        if (this.pacientePreseleccionadoId) {
          this.citaForm.patchValue({ pacienteId: this.pacientePreseleccionadoId });
        }
      },
      error: (err) => {
        console.error('Error al cargar pacientes:', err);
        this.pacientes = [];
      }
    });
  }

  guardarCita(): void {
    if (this.citaForm.invalid) {
      this.citaForm.markAllAsTouched();
      return;
    }

    this.cargando = true;
    const val = this.citaForm.value;

    const inicioIso = `${val.fecha}T${val.horaInicio}:00`;
    const fechaInicio = new Date(inicioIso);
    const fechaFin = new Date(fechaInicio.getTime() + val.duracionMinutos * 60000);
    const finIso = fechaFin.toISOString().substring(0, 19);

    const payload = {
      pacienteId: Number(val.pacienteId),
      fechaHoraInicio: inicioIso,
      fechaHoraFin: finIso,
      motivoConsulta: val.motivoConsulta,
      observaciones: val.observaciones
    };

    this._citaService.agendarCita(payload).subscribe({
      next: () => {
        this.cargando = false;
        Swal.fire('¡Éxito!', 'La cita médica ha sido agendada.', 'success');
        this.router.navigate(['/citas/citaList']);
      },
      error: (err) => {
        this.cargando = false;
        console.error('Error al agendar cita:', err);
        Swal.fire('Error', 'No se pudo agendar la cita médica.', 'error');
      }
    });
  }
}
