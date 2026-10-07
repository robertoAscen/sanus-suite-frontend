import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { RecetaMedicaService } from '../../../services/receta-medica.service';

@Component({
  selector: 'app-receta-form',
  templateUrl: './addReceta-medica.component.html',
  styleUrls: ['./addReceta-medica.component.scss']
})
export class AddRecetaMedicaComponent implements OnInit {
  @Input() pacienteId!: number;
  @Input() notaEvolucionId?: number;

  recetaForm!: FormGroup;
  pdfPreviewUrl: SafeResourceUrl | null = null;
  cargandoPdf = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private recetaService: RecetaMedicaService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Extraer variables si la navegación fue por URL con Query Parameters
    this.route.queryParams.subscribe((params) => {
      if (params['pacienteId']) {
        this.pacienteId = Number(params['pacienteId']);
      }
      if (params['notaEvolucionId']) {
        this.notaEvolucionId = Number(params['notaEvolucionId']);
      }
    });

    this.initForm();
    this.agregarMedicamento();
  }

  private initForm(): void {
    this.recetaForm = this.fb.group({
      observacionesGenerales: [''],
      firmado: [true],
      medicamentos: this.fb.array([])
    });
  }

  get medicamentos(): FormArray {
    return this.recetaForm.get('medicamentos') as FormArray;
  }

  crearMedicamentoGroup(): FormGroup {
    return this.fb.group({
      medicamento: ['', Validators.required],
      formaFarmaceutica: ['Tableta'],
      presentacion: [''],
      dosis: ['', Validators.required],
      viaAdministracion: ['Oral', Validators.required],
      frecuencia: ['', Validators.required],
      duracionTratamiento: ['', Validators.required],
      indicacionesAdicionales: ['']
    });
  }

  agregarMedicamento(): void {
    this.medicamentos.push(this.crearMedicamentoGroup());
  }

  eliminarMedicamento(index: number): void {
    if (this.medicamentos.length > 1) {
      this.medicamentos.removeAt(index);
    }
  }

  guardarYEmitirReceta(): void {
    if (this.recetaForm.invalid) {
      this.recetaForm.markAllAsTouched();
      this.toastr.warning('Completa los campos obligatorios marcados con (*)', 'Formulario Incompleto');
      return;
    }

    if (!this.pacienteId) {
      this.toastr.error('No se ha especificado el ID del paciente.', 'Error de Parámetros');
      return;
    }

    this.cargandoPdf = true;

    const request = {
      pacienteId: this.pacienteId,
      notaEvolucionId: this.notaEvolucionId,
      ...this.recetaForm.value
    };

    this.recetaService.crearReceta(request).subscribe({
      next: (res: any) => {
        const recetaId = res?.resultado?.id ?? res?.resultado ?? res?.id;
        if (recetaId) {
          this.cargarPrevisualizacionPdf(recetaId);
        } else {
          this.cargandoPdf = false;
          this.toastr.error('No se pudo obtener el identificador de la receta guardada.', 'Error');
        }
      },
      error: (err) => {
        console.error('Error al emitir la receta:', err);
        this.cargandoPdf = false;
        this.toastr.error('Ocurrió un error al intentar guardar la receta.', 'Error en Servidor');
      }
    });
  }

  cargarPrevisualizacionPdf(recetaId: number): void {
    this.recetaService.obtenerPdf(recetaId).subscribe({
      next: (blob: Blob) => {
        const pdfBlob = new Blob([blob], { type: 'application/pdf' });
        const fileUrl = URL.createObjectURL(pdfBlob);

        // Se agrega #view=FitH al final de la URL para forzar el ajuste al ancho disponible
        this.pdfPreviewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${fileUrl}#toolbar=1&navpanes=0&view=FitH`);

        this.cargandoPdf = false;
        this.toastr.success('Receta generada y firmada exitosamente.', 'Éxito');
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar el PDF:', err);
        this.cargandoPdf = false;
        this.toastr.error('La receta se guardó, pero hubo un problema al generar la vista previa en PDF.', 'Error de PDF');
      }
    });
  }

  resetearFormulario(): void {
    this.pdfPreviewUrl = null;
    this.initForm();
    this.agregarMedicamento();
  }
}
