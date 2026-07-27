import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// Modelos y Servicios reales de tu app
import { HistoriaClinicaService } from '../../services/historia-clinica.service';
import { TokenStorageService } from '../../services/tokenStorage.service';
import { HistoriaClinica } from '../../models/historia-clinica.model';

@Component({
  selector: 'app-historia-clinica',
  standalone: true,
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.scss']
})
export class HistoriaClinicaComponent implements OnInit {
  numeroExpediente!: string;
  historiaForm!: FormGroup;
  historiaActual?: HistoriaClinica;
  
  loading = false;
  isReadOnly = false; // Se activará si el documento ya está firmado legalmente
  activeTab = 'antecedentes'; // Control de la pestaña activa

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private hcService: HistoriaClinicaService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    // 1. Obtener el id del expediente desde la ruta (ej: /patients/history/:id)
    this.numeroExpediente = String(this.route.snapshot.paramMap.get('numeroExpediente'));
    //this.numeroExpediente = Number(this.route.snapshot.paramMap.get('id'));
    
    // 2. Inicializar la estructura del Formulario Reactivo mapeando tus entidades Java
    this.initForm();

    // 3. Cargar la información del Backend
    if (this.numeroExpediente) {
      this.cargarHistoriaClinica();
    }
  }

  private initForm(): void {
    this.historiaForm = this.fb.group({
      id: [null],
      padecimientoActual: ['', Validators.required],
      
      // Objeto Embebido: Antecedentes Heredofamiliares
      antecedentesHeredofamiliares: this.fb.group({
        diabetes: [''],
        hipertension: [''],
        cardiopatias: [''],
        neoplasias: [''],
        otrosHereditarios: ['']
      }),

      // Objeto Embebido: Antecedentes Personales Patológicos
      antecedentesPersonalesPatologicos: this.fb.group({
        enfermedadesCronicas: [''],
        alergias: [''], // ¡Clave destacar en la vista!
        quirurgicos: [''],
        traumaticos: [''],
        transfusionales: [''],
        otrosPatologicos: ['']
      }),

      // Objeto Embebido: Antecedentes Personales No Patológicos
      antecedentesPersonalesNoPatologicos: this.fb.group({
        habitosHigienicos: [''],
        alimentacion: [''],
        vivienda: [''],
        actividadFisica: [''],
        toxicomanias: ['']
      }),

      // Objeto Embebido: Antecedentes Ginecoobstétricos
      antecedentesGinecoObstetricos: this.fb.group({
        menarca: [null],
        cicloMenstrual: [''],
        gestas: [0],
        partos: [0],
        cesareas: [0],
        abortos: [0],
        fum: ['']
      })
    });
  }

  cargarHistoriaClinica(): void {
    this.loading = true;
    this.hcService.obtenerPorExpediente(this.numeroExpediente).subscribe({
      next: (hc) => {
        this.loading = false;
        if (hc) {
          this.historiaActual = hc;
          // Volcamos los datos del backend directo en la estructura reactiva del formulario
          this.historiaForm.patchValue(hc);

          // Si el documento ya cuenta con firma legal, bloqueamos la edición por completo
          if (hc.firmado) {
            this.isReadOnly = true;
            this.historiaForm.disable();
          }
        }
      },
      error: (err) => {
        this.loading = false;
        console.log('Paciente nuevo: No cuenta con antecedentes previos en la DB.');
      }
    });
  }

  guardarBorrador(): void {
    if (this.historiaForm.invalid) {
      this.markFormGroupTouched(this.historiaForm);
      return;
    }

    const payload: HistoriaClinica = {
      ...this.historiaForm.getRawValue(),
      expediente: { id: this.numeroExpediente },
      firmado: false // Al guardar borrador forzamos false en la lógica de control del Front
    };

    this.loading = true;
    this.hcService.guardarOActualizar(payload).subscribe({
      next: (resultado) => {
        this.loading = false;
        this.historiaActual = resultado;
        this.historiaForm.patchValue(resultado);
        alert('Borrador clínico guardado correctamente.');
      },
      error: (err) => {
        this.loading = false;
        alert('Error al guardar el borrador.');
      }
    });
  }

  firmarExpediente(): void {
    if (!this.historiaActual?.id) {
      alert('Primero debes guardar el avance como borrador antes de firmar legalmente.');
      return;
    }

    if (confirm('¿Estás seguro de firmar el expediente? Una vez firmado, el documento quedará bloqueado permanentemente para fines legales.')) {
      this.loading = true;
      
      // Recuperamos el ID del médico actual desde el TokenStorageService
      const usuarioLogueado = this.tokenStorage.getUser();
      const medicoId = usuarioLogueado?.id || 1; // Fallback de control

      this.hcService.firmarDocumento(this.historiaActual.id, medicoId).subscribe({
        next: (resultado) => {
          this.loading = false;
          this.isReadOnly = true;
          this.historiaActual = resultado;
          this.historiaForm.patchValue(resultado);
          this.historiaForm.disable(); // Bloqueamos todos los campos inmediatamente
          alert('Documento firmado y bloqueado con éxito.');
        },
        error: (err) => {
          this.loading = false;
          alert('Ocurrió un error al procesar la firma del documento.');
        }
      });
    }
  }

  // Helper para activar visualmente los errores si envían el formulario incompleto
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}