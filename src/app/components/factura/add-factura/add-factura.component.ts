import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacturaService } from 'src/app/services/factura.service';
import { PacienteService } from 'src/app/services/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-factura',
  templateUrl: './add-factura.component.html',
  styleUrls: ['./add-factura.component.scss']
})
export class AddFacturaComponent implements OnInit {
  public facturaForm!: FormGroup;
  public pacientes: any[] = [];
  public cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _facturaService: FacturaService,
    private _pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.cargarPacientes();
  }

  private initForm(): void {
    this.facturaForm = this.fb.group({
      pacienteId: ['', [Validators.required]],
      descripcion: ['Consulta Médica General', [Validators.required]],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      precioUnitario: [500, [Validators.required, Validators.min(0)]]
    });
  }

  cargarPacientes(): void {
    this._pacienteService.getPatientList().subscribe({
      next: (res: any) => {
        const lista = res.resultado || res.datos || res.data || res || [];
        this.pacientes = Array.isArray(lista) ? lista : [];
      },
      error: (err) => {
        console.error('Error al cargar pacientes:', err);
      }
    });
  }

  guardarFactura(): void {
    if (this.facturaForm.invalid) {
      this.facturaForm.markAllAsTouched();
      return;
    }

    this.cargando = true;
    const val = this.facturaForm.value;
    const pacienteSeleccionado = this.pacientes.find(p => Number(p.id) === Number(val.pacienteId));
    const nombreCompleto = pacienteSeleccionado 
      ? `${pacienteSeleccionado.nombre} ${pacienteSeleccionado.apellidoPaterno} ${pacienteSeleccionado.apellidoMaterno}`
      : 'Paciente General';

    const subtotal = val.cantidad * val.precioUnitario;
    const impuestos = subtotal * 0.16; // 16% IVA estándar
    const total = subtotal + impuestos;

    const payload = {
      pacienteId: Number(val.pacienteId),
      pacienteNombre: nombreCompleto,
      subtotal: subtotal,
      impuestos: impuestos,
      total: total,
      detalles: [
        {
          productoId: null,
          descripcion: val.descripcion,
          cantidad: Number(val.cantidad),
          precioUnitario: Number(val.precioUnitario),
          subtotal: subtotal
        }
      ]
    };

    this._facturaService.crearFactura(payload).subscribe({
      next: () => {
        this.cargando = false;
        Swal.fire('¡Éxito!', 'Nota de venta creada correctamente.', 'success');
        this.router.navigate(['/factura/facturaList']);
      },
      error: (err) => {
        this.cargando = false;
        console.error('Error al crear factura:', err);
        Swal.fire('Error', 'No se pudo registrar la nota de venta.', 'error');
      }
    });
  }
}