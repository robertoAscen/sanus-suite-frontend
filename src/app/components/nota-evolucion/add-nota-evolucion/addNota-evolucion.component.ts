import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotaEvolucionService } from '../../../services/nota-evolucion.service';
import { TokenStorageService } from '../../../services/tokenStorage.service';
import { NotaEvolucionRequestPayload } from '../../../models/nota-evolucion.model';

@Component({
  selector: 'app-add-nota-evolucion',
  templateUrl: './addNota-evolucion.component.html'
})
export class AddNotaEvolucionComponent implements OnInit {
  title = 'Registrar Nota de Evolución';
  isEdit = false;
  isSubmit = false;

  notaGuardadaId: number | null = null;

  nota: any = {
    id: null,
    pacienteId: null,
    nombrePaciente: '',
    numeroExpediente: '',
    fechaConsulta: null,
    subjetivo: '',
    objetivo: '',
    analisis: '',
    plan: '',
    firmado: false,
    signosVitales: {
      presionArterial: '',
      frecuenciaCardiaca: null,
      frecuenciaRespiratoria: null,
      temperatura: null,
      peso: null,
      talla: null,
      imc: null,
      saturacionOxigeno: null
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private notaService: NotaEvolucionService,
    private tokenStorageService: TokenStorageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const today = new Date();
    this.nota.fechaConsulta = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate()
    };

    this.route.queryParamMap.subscribe((params) => {
      const pacienteId = params.get('pacienteId');
      const expedienteId = params.get('expedienteId');
      const nombrePaciente = params.get('nombrePaciente');
      const notaId = params.get('id');

      if (pacienteId) this.nota.pacienteId = Number(pacienteId);
      if (expedienteId) this.nota.numeroExpediente = expedienteId;
      if (nombrePaciente) this.nota.nombrePaciente = nombrePaciente;

      if (notaId) {
        this.isEdit = true;
        this.nota.id = Number(notaId);
        this.title = 'Editar Nota de Evolución';
        this.cargarNotaParaEdicion(this.nota.id);
      }
    });
  }

  cargarNotaParaEdicion(id: number): void {
    this.notaService.obtenerPorId(id).subscribe({
      next: (res: any) => {
        const data = res?.resultado || res?.datos || res;

        if (data) {
          if (data.firmado) {
            this.toastr.warning('Las notas firmadas no se pueden modificar por normatividad sanitaria.', 'Nota Asentada');
            this.router.navigate(['/patients/patientList']);
            return;
          }

          this.nota.id = data.id;
          this.nota.pacienteId = data.pacienteId;
          this.nota.numeroExpediente = data.numeroExpediente;
          this.nota.nombrePaciente = data.nombrePaciente || this.nota.nombrePaciente;
          this.nota.subjetivo = data.subjetivo || '';
          this.nota.objetivo = data.objetivo || '';
          this.nota.analisis = data.analisis || '';
          this.nota.plan = data.planTratamiento || '';
          this.nota.firmado = !!data.firmado;

          if (data.fechaConsulta) {
            const f = new Date(data.fechaConsulta);
            this.nota.fechaConsulta = {
              year: f.getFullYear(),
              month: f.getMonth() + 1,
              day: f.getDate()
            };
          }

          this.nota.signosVitales = {
            presionArterial: data.presionArterial ?? '',
            frecuenciaCardiaca: data.frecuenciaCardiaca ?? null,
            frecuenciaRespiratoria: data.frecuenciaRespiratoria ?? null,
            temperatura: data.temperatura ?? null,
            peso: data.peso ?? null,
            talla: data.talla ?? null,
            imc: data.imc ?? null,
            saturacionOxigeno: data.saturacionOxigeno ?? null
          };

          this.calcularIMC();
        }
      },
      error: (err) => {
        console.error('Error al cargar la nota:', err);
        this.toastr.error('Error al cargar la información de la nota.', 'Error');
      }
    });
  }

  calcularIMC(): void {
    const peso = Number(this.nota.signosVitales.peso);
    const talla = Number(this.nota.signosVitales.talla);

    if (peso > 0 && talla > 0) {
      const imcVal = peso / (talla * talla);
      this.nota.signosVitales.imc = Number(imcVal.toFixed(2));
    } else {
      this.nota.signosVitales.imc = null;
    }
  }

  save(form: NgForm): void {
    this.isSubmit = true;

    if (form.invalid) {
      this.toastr.warning('Completa los campos obligatorios.', 'Formulario Incompleto');
      return;
    }

    const currentUserId = this.tokenStorageService.getUserId();

    let fechaIso = new Date().toISOString().substring(0, 19);
    if (this.nota.fechaConsulta && typeof this.nota.fechaConsulta === 'object') {
      const yyyy = this.nota.fechaConsulta.year;
      const mm = String(this.nota.fechaConsulta.month).padStart(2, '0');
      const dd = String(this.nota.fechaConsulta.day).padStart(2, '0');
      const hhmmss = new Date().toTimeString().substring(0, 8);

      fechaIso = `${yyyy}-${mm}-${dd}T${hhmmss}`;
    }

    const payload: NotaEvolucionRequestPayload = {
      id: this.nota.id,
      numeroExpediente: this.nota.numeroExpediente,
      pacienteId: this.nota.pacienteId,
      medicoId: currentUserId ? Number(currentUserId) : undefined,
      fechaConsulta: fechaIso,
      subjetivo: this.nota.subjetivo,
      objetivo: this.nota.objetivo,
      analisis: this.nota.analisis,
      planTratamiento: this.nota.plan,
      firmado: !!this.nota.firmado,

      presionArterial: this.nota.signosVitales?.presionArterial,
      frecuenciaCardiaca: this.nota.signosVitales?.frecuenciaCardiaca,
      frecuenciaRespiratoria: this.nota.signosVitales?.frecuenciaRespiratoria,
      temperatura: this.nota.signosVitales?.temperatura,
      peso: this.nota.signosVitales?.peso,
      talla: this.nota.signosVitales?.talla,
      imc: this.nota.signosVitales?.imc,
      saturacionOxigeno: this.nota.signosVitales?.saturacionOxigeno
    };

    const request$ =
      this.isEdit && this.nota.id ? this.notaService.actualizar(payload as any) : this.notaService.guardarOActualizar(payload);

    request$.subscribe({
      next: (res: any) => {
        const msg = res?.mensaje || (this.isEdit ? 'Nota actualizada correctamente.' : 'Nota guardada correctamente.');
        this.toastr.success(msg, 'Éxito');

        const idExtraido = res?.resultado?.id ?? res?.resultado ?? res?.datos?.id ?? res?.id ?? this.nota.id;
        this.notaGuardadaId = typeof idExtraido === 'number' ? idExtraido : (Number(idExtraido) || 1);

        this.isSubmit = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        const errorMsg = err?.error?.mensaje || 'Error al procesar la solicitud.';
        this.toastr.error(errorMsg, 'Error');
      }
    });
  }

  irAReceta(): void {
    // Ajusta la ruta base ('/prescriptions/add') a la definición exacta en tu AppRoutingModule
    this.router.navigate(['/recetas-medica/nueva'], {
      queryParams: {
        pacienteId: this.nota.pacienteId,
        notaEvolucionId: this.notaGuardadaId,
        expedienteId: this.nota.numeroExpediente,
        nombrePaciente: this.nota.nombrePaciente
      }
    });
  }

  irAlCatalogo(): void {
    this.router.navigate(['/patients/patientList']);
  }
}