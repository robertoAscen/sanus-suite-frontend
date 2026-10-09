import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../../services/global';
import { PacienteService } from '../../../services/paciente.service';
import { Paciente } from '../../../models/paciente';
import Swal from 'sweetalert2';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.scss'],
  providers: [PacienteService]
})
export class AddPacienteComponent implements OnInit {
  form: any;
  public isSubmit: boolean;
  public title: string | undefined;
  public paciente: Paciente;
  public url: string;
  public isEdit: boolean;

  public maskMobileNo = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  modelPopup: NgbDateStruct | undefined;

  constructor(
    private _pacienteService: PacienteService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
    this.isSubmit = false;
    this.isEdit = false;
    this.paciente = new Paciente(0, '', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    // Escuchamos si existe el parámetro 'id' en la ruta (ej. /patients/editPatient/:id)
    this._route.params.subscribe((params: Params) => {
      const id = params['id'];

      if (id) {
        this.isEdit = true;
        this.title = 'Editar Datos del Paciente';
        this.cargarPaciente(id);
      } else {
        this.isEdit = false;
        this.title = 'Añadir Paciente';
      }
    });
  }

  cargarPaciente(id: any): void {
    this._pacienteService.getPatient(id).subscribe(
      (response: any) => {
        const datos = response?.resultado || response?.patient || response;

        if (datos) {
          this.paciente = datos;

          // Si fechaNacimiento viene como string (ej. "1988-05-12"), lo parseamos a NgbDateStruct
          if (this.paciente.fechaNacimiento && typeof this.paciente.fechaNacimiento === 'string') {
            const partes = this.paciente.fechaNacimiento.split('-');
            if (partes.length === 3) {
              this.paciente.fechaNacimiento = {
                year: parseInt(partes[0], 10),
                month: parseInt(partes[1], 10),
                day: parseInt(partes[2], 10)
              } as any;
            }
          }
        }
      },
      (error) => {
        console.error('Error al cargar datos del paciente:', error);
        Swal.fire('¡Error!', 'No se pudieron recuperar los datos del paciente.', 'error').then(() => {
          this._router.navigate(['/patients/patientList']);
        });
      }
    );
  }

  save(form: any): void {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }

    // 1. CLONAMOS EL OBJETO PARA NO ROMPER EL INPUT VISUAL EN LA PANTALLA
    const payload = { ...this.paciente };

    // 2. CORREGIMOS EL FORMATO DE LA FECHA (De Objeto NgbDate a String YYYY-MM-DD)
    if (payload.fechaNacimiento && typeof payload.fechaNacimiento === 'object') {
      const fecha: any = payload.fechaNacimiento;
      const month = fecha.month < 10 ? `0${fecha.month}` : fecha.month;
      const day = fecha.day < 10 ? `0${fecha.day}` : fecha.day;
      payload.fechaNacimiento = `${fecha.year}-${month}-${day}`;
    }

    // 3. SI NO ES EDICIÓN, ELIMINAMOS EL ID DEL PAYLOAD
    if (!this.isEdit) {
      delete (payload as any).id;
    }

    if (!this.isEdit) {
      this._pacienteService.createPatient(payload).subscribe(
        (response) => {
          if (response && (response.resultado || response.patient)) {
            Swal.fire(
              '¡Paciente creado!',
              'El paciente se ha registrado exitosamente.',
              'success'
            ).then(() => {
              this._router.navigate(['/patients/patientList']);
            });
          }
        },
        (error) => {
          console.error('Error del servidor al crear paciente:', error);
          Swal.fire('¡Error!', 'No se pudo guardar el registro: ' + (error.error?.mensaje || error.message), 'error');
        }
      );
    } else {
      this._pacienteService.updatePatient(this.paciente.id, payload).subscribe(
        (response) => {
          if (response) {
            Swal.fire(
              '¡Paciente actualizado!',
              'Los datos del paciente se guardaron correctamente.',
              'success'
            ).then(() => {
              this._router.navigate(['/patients/patientList']);
            });
          }
        },
        (error) => {
          console.error('Error al actualizar paciente:', error);
          Swal.fire('¡Error!', 'No se pudieron aplicar los cambios.', 'error');
        }
      );
    }
  }
}