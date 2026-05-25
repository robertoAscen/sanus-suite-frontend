import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { Global } from '../../../services/global';
import { Paciente } from '../../../models/paciente';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.scss'],
  providers: [PacienteService]
})
export class PacienteListComponent implements OnInit {

  public titleModal!: string;
  public title!: string;
  public patients!: Paciente[];
  public url: string;
  public alert!: string;

  public isSubmit: boolean;
  public patient: Paciente;
  public isEdit: boolean;

  dtExportButtonOptions: any = {};

  public maskMobileNo = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  modelPopup!: NgbDateStruct;

  constructor(
    private _patientService: PacienteService,
    private _route: ActivatedRoute,
    private _router: Router,
    private modalService: NgbModal
  ) {
    this.url = Global.url;
    this.isSubmit = false;
    this.isEdit = false;
    this.patient = new Paciente(
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );
  }

  ngOnInit(): void {
    this.title = "Catálogo de Pacientes";
    this.dtExportButtonOptions = {
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ]
    };
    this.loadPatients();
  }

  patientReset() {
    let patient = new Paciente(
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );
    return patient;
  }

  addPatient(content:any) {
    this.titleModal = "AÑADIR PACIENTE";
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'xl'
    }).result.then((result) => {

    }, (reason) => {
      this.patient = this.patientReset();
    });
  }

  openEdit(content:any, patientModal: Paciente) {
    this.patient = patientModal;
    this.titleModal = "EDITAR PACIENTE";
    this.isEdit = true;
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'xl'
    }).result.then((result) => {
    }, (reason) => {
      this.patient = this.patientReset();
      this.isEdit = false;
    });
  }

  loadPatients() {
    setTimeout(() => {
      this._patientService.getPatientList().subscribe(
        response => {
          // !!! AQUÍ ESTÁ EL AJUSTE !!!
            // Tu backend mapea la lista en la propiedad 'resultado' de RespuestaApi
            if (response && response.resultado) {
                this.patients = response.resultado;
                console.log('Pacientes cargados con éxito:', this.patients);
            } else {
                console.log('El backend no retornó datos en el campo resultado:', response);
            }
        },
        error => {
          console.log('error del servidor en patientList...');
          console.log(error);
          Swal.fire('¡Error!', 'Status error: ' + error.status + error.message, 'error');
        }
      );
    }, 10);
  }

  deletePatient(patient: Paciente) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: `Vas a dar de baja al paciente ${patient.nombre} ${patient.apellidoPaterno}. Esta acción ocultará su registro del listado general.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, dar de baja',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Invocamos al servicio enviando el ID del paciente
            this._patientService.deletePatient(patient.id).subscribe(
                response => {
                    // SweetAlert de éxito
                    Swal.fire(
                        '¡Dado de baja!',
                        'El paciente ha sido inactivado correctamente.',
                        'success'
                    ).then(() => {
                        // Recargamos el listado para que desaparezca de la tabla
                        this.loadPatients(); 
                    });
                },
                error => {
                    console.error('Error al dar de baja al paciente:', error);
                    Swal.fire(
                        '¡Error!',
                        'No se pudo procesar la baja del paciente. Inténtalo de nuevo.',
                        'error'
                    );
                }
            );
        }
    });
}


  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    } else {
      if (!this.isEdit) {
        console.log('patient en addPatient');
        console.log(this.patient);
        this._patientService.createPatient(this.patient).subscribe(
          response => {
            if (response.patient) {
              console.log('respuesta del servidor para createPatient en addPatient');
              console.log(response);
              this.patient = response.patient;
              this.modalService.dismissAll();
              Swal.fire(
                'Paciente creado!!!',
                'El paciente ' + this.patient.nombre + ' ' + this.patient.apellidoPaterno + ' ' + this.patient.apellidoMaterno + ' se ha creado correctamente!!!',
                'success'
              ).then(function () {
                window.location.reload();
              });
            }
          },
          error => {
            console.log('error del servidor para createPatient en addPatient');
            console.log(error);
            this.modalService.dismissAll();
            Swal.fire('¡Error!', 'Status error: ' + error.status + error.message, 'error');
          }
        );
      } else {
        console.log('patient en editPatient');
        console.log(this.patient);
        this._patientService.updatePatient(this.patient.id, this.patient).subscribe(
          response => {
            if (response.patient) {
              console.log('respuesta del servidor para updatePatient en editPatient');
              console.log(response);
              this.patient = response.patient;
              this.modalService.dismissAll();
              Swal.fire(
                'Paciente editado!!!',
                'El paciente ' + this.patient.nombre + ' ' + this.patient.apellidoPaterno + ' ' + this.patient.apellidoMaterno + ' se ha editado correctamente!!!',
                'success'
              ).then(function () {
                window.location.reload();
              });
            }
          },
          error => {
            console.log('error del servidor para updatePatient en editPatient');
            console.log(error);
            this.modalService.dismissAll();
            Swal.fire('¡Error!', 'Status error: ' + error.status + error.message, 'error');
          }
        );
      }
    }
  }
}