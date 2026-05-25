import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class PacienteService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  createPatient(patient: any): Observable<any> {
    //const token = localStorage.getItem('access_token');
    const tenantId = localStorage.getItem('tenant_id') || 'CLINICA-GDI-01'; 
    const usuario = localStorage.getItem('usuario') || 'Doc-1';

    let headers = new HttpHeaders()
        .set('Content-Type', 'application/json') // Forzamos JSON limpio
        //.set('Authorization', 'Bearer ' + token)
        .set('x-tenant-id', tenantId)
        .set('x-usuario', usuario);

    // Nota: Eliminamos el stringify manual si el HttpClient de Angular ya procesa el objeto
    return this._http.post(this.url + '/sanus-suite/pacientes/api/v1/guardar-paciente', patient, { headers: headers });
}

updatePatient(id: any, patient: any): Observable<any> {
    const token = localStorage.getItem('access_token');
    const tenantId = localStorage.getItem('tenant_id') || 'CLINICA-GDI-01'; 
    const usuario = localStorage.getItem('usuario') || 'Doc-1';

    let headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .set('x-tenant-id', tenantId)
        .set('x-usuario', usuario);

    // Apuntamos al endpoint de actualización correspondiente en tu v1
    return this._http.put(this.url + '/sanus-suite/pacientes/api/v1/actualizar-paciente/' + id, patient, { headers: headers });
}

  getPatient(id: any): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/raw')
      .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this._http.get(this.url + 'api/patient/' + id, { headers: headers });
  }

  getPatientList(): Observable<any> {
    // 1. Recuperamos las variables del almacenamiento local
    //const token = localStorage.getItem('access_token');
    const tenantId = localStorage.getItem('tenant_id') || 'CLINICA-GDI-01'; // El tenant que usaste en las pruebas exitosas
    const usuario = localStorage.getItem('usuario') || 'Doc-1';

    // 2. Configuramos los headers tal como los exige tu backend blindado
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      //.set('Authorization', 'Bearer ' + token)
      .set('x-tenant-id', tenantId)
      .set('x-usuario', usuario);

    // 3. Apuntamos a la ruta exacta del controlador de Spring
    return this._http.get(this.url + '/sanus-suite/pacientes/api/v1/listar-pacientes', { headers: headers });
  }

  deletePatient(id: any): Observable<any> {
    const token = localStorage.getItem('access_token');
    const tenantId = localStorage.getItem('tenant_id') || 'CLINICA-GDI-01';
    const usuario = localStorage.getItem('usuario') || 'Doc-1';

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .set('x-tenant-id', tenantId)
      .set('x-usuario', usuario);

    // Apuntamos al endpoint exacto que probamos con curl: /baja-paciente/{id}
    return this._http.delete(this.url + '/sanus-suite/pacientes/api/v1/baja-paciente/' + id, { headers: headers });
  }

  getPatientFileList(id: any): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/raw')
      .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this._http.get(this.url + 'searchPatientFile/' + id, { headers: headers });
  }
}
