import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // 1. Importamos ngx-toastr
import { HistoriaClinicaService } from '../../../services/historia-clinica.service'; 
import { HistoriaClinicaRequestDto, HistoriaClinicaResponseDto } from '../../../models/historia-clinica.model'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-historia-clinica',
  templateUrl: './addHistoria-clinica.component.html',
  styleUrls: ['./addHistoria-clinica.component.scss']
})
export class AddHistoriaClinicaComponent implements OnInit {

  // --- PROPIEDADES VINCULADAS AL HTML ---
  numeroExpediente: string = '';
  activeTab: string = 'antecedentes';
  historiaForm!: FormGroup;

  // --- ESTADOS Y CONTROL ---
  historiaActual?: HistoriaClinicaResponseDto;
  isReadOnly: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private historiaService: HistoriaClinicaService,
    private toastr: ToastrService // 2. Inyectamos ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.route.paramMap.subscribe(() => {
      let currentRoute: ActivatedRoute | null = this.route;
      let expParam: string | null = null;

      while (currentRoute) {
        expParam = currentRoute.snapshot.paramMap.get('numeroExpediente') || 
                   currentRoute.snapshot.paramMap.get('expediente') || 
                   currentRoute.snapshot.paramMap.get('id');
        if (expParam) break;
        currentRoute = currentRoute.parent;
      }

      if (expParam) {
        this.numeroExpediente = expParam;
        this.cargarHistoriaClinica();
      } else {
        console.warn('No se detectó un número de expediente en los parámetros de la URL.');
      }
    });
  }

  private initForm(): void {
    this.historiaForm = this.fb.group({
      motivoConsulta: ['', [Validators.required]],
      padecimientoActual: ['', [Validators.required]],

      antecedentesHeredofamiliares: [''],
      antecedentesPatologicos: [''],
      antecedentesNoPatologicos: [''],
      interrogatorioAparatosSistemas: [''],
      exploracionFisica: [''],
      diagnostico: [''],
      planTratamiento: ['']
    });
  }

  cargarHistoriaClinica(): void {
    if (!this.numeroExpediente) return;

    this.loading = true;
    this.historiaService.obtenerPorExpediente(this.numeroExpediente).subscribe({
      next: (res) => {
        this.loading = false;
        if (res) {
          this.historiaActual = res;
          this.isReadOnly = res.firmado;

          this.historiaForm.patchValue({
            motivoConsulta: res.motivoConsulta,
            padecimientoActual: res.padecimientoActual,
            antecedentesHeredofamiliares: res.antecedentesHeredofamiliares,
            antecedentesPatologicos: res.antecedentesPatologicos,
            antecedentesNoPatologicos: res.antecedentesNoPatologicos,
            interrogatorioAparatosSistemas: res.interrogatorioAparatosSistemas,
            exploracionFisica: res.exploracionFisica,
            diagnostico: res.diagnostico,
            planTratamiento: res.planTratamiento
          });

          if (this.isReadOnly) {
            this.historiaForm.disable();
          }
        }
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }

  /**
   * Guarda o actualiza el borrador actual (Con ngx-toastr)
   */
  guardarBorrador(): void {
    if (this.historiaForm.invalid) {
      this.historiaForm.markAllAsTouched();
      this.toastr.warning('Por favor completa el motivo de consulta y padecimiento actual', 'Atención', {
          progressBar: true,
          progressAnimation: 'increasing',
          timeOut: 2000
        });
      return;
    }

    const payload: HistoriaClinicaRequestDto = {
      id: this.historiaActual?.id,
      numeroExpediente: this.numeroExpediente,
      ...this.historiaForm.getRawValue()
    };

    this.loading = true;
    this.historiaService.guardar(payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.historiaActual = res;
        
        // Dispara el Toast verde de la captura
        this.toastr.success('Historia clínica guardada', 'Guardado', {
          progressBar: true,
          progressAnimation: 'increasing',
          timeOut: 2000
        });
      },
      error: (err) => {
        this.loading = false;
        const mensajeError = err.error?.detalles?.[0] || err.error?.mensaje || 'Error al guardar el borrador.';
        this.toastr.error(mensajeError, 'Error', {
          progressBar: true,
          progressAnimation: 'increasing',
          timeOut: 2000
        });
      }
    });
  }

  /**
   * Firma Legalmente el expediente
   */
  firmarExpediente(): void {
    if (!this.historiaActual?.id) {
      this.toastr.warning('Debes guardar el borrador antes de firmar el expediente.', 'Atención', {
          progressBar: true,
          progressAnimation: 'increasing',
          timeOut: 2000
        });
      return;
    }

    Swal.fire({
      title: '¿Firmar Expediente Legalmente?',
      text: 'Al firmar, la historia clínica pasará a estado de SOLO LECTURA acorde a la NOM-004-SSA3-2012 y no podrá ser editada posteriormente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, firmar e inhabilitar edición',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ejecutarFirma();
      }
    });
  }

  private ejecutarFirma(): void {
    if (!this.historiaActual?.id) return;

    this.loading = true;
    this.historiaService.firmar(this.historiaActual.id).subscribe({
      next: (res) => {
        this.loading = false;
        this.historiaActual = res;
        this.isReadOnly = true;
        this.historiaForm.disable();

        this.toastr.success(`Expediente firmado por ${res.medicoNombreSnapshot || 'Médico Autorizado'}`, 'Firmado', {
          progressBar: true,
          progressAnimation: 'increasing',
          timeOut: 2000
        });
      },
      error: (err) => {
        this.loading = false;
        const msg = err.error?.detalles?.[0] || 'Ocurrió un error al intentar firmar el documento.';
        this.toastr.error(msg, 'Error de Firma', {
          progressBar: true,
          progressAnimation: 'increasing',
          timeOut: 2000
        });
      }
    });
  }
}