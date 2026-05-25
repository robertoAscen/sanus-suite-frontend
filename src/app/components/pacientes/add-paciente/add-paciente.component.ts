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

  ngOnInit() {
    this.title = 'Añadir Paciente';
  }

  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    } else {
      // 1. CLONAMOS EL OBJETO PARA NO ROMPER EL INPUT VISUAL EN LA PANTALLA
      const payload = { ...this.paciente };

      // 2. CORREGIMOS EL FORMATO DE LA FECHA (De Objeto NgbDate a String YYYY-MM-DD)
      if (payload.fechaNacimiento && typeof payload.fechaNacimiento === 'object') {
        const fecha: any = payload.fechaNacimiento;
        
        // Formateamos mes y día para asegurar que siempre tengan 2 dígitos (ej. 09 en lugar de 9)
        const month = fecha.month < 10 ? `0${fecha.month}` : fecha.month;
        const day = fecha.day < 10 ? `0${fecha.day}` : fecha.day;
        
        // Guardamos el string final de vuelta en la propiedad
        payload.fechaNacimiento = `${fecha.year}-${month}-${day}`;
      }

      // 3. SI NO ES EDICIÓN, ELIMINAMOS EL ID DEL PAYLOAD PARA MANDARLO LIMPIO
      if (!this.isEdit) {
        delete (payload as any).id;
      }

      console.log('Payload corregido y listo para Sanus Suite API:');
      console.log(payload);

      // 4. MANDAMOS EL PAYLOAD FORMATEADO EN LUGAR DE THIS.PACIENTE
      if (!this.isEdit) {
        this._pacienteService.createPatient(payload).subscribe(
          (response) => {
            if (response && response.resultado) {
              console.log('Servidor respondió con éxito:', response);

              Swal.fire(
                '¡Paciente creado!', 
                `El paciente se ha registrado exitosamente en tu catálogo de Sanus Suite.`, 
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
        // Lógica de actualización (PUT) pasando el payload correcto
        this._pacienteService.updatePatient(this.paciente.id, payload).subscribe(
          (response) => {
            if (response && response.resultado) {
              Swal.fire('¡Paciente actualizado!', 'Los cambios demográficos se guardaron correctamente.', 'success').then(() => {
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
}
