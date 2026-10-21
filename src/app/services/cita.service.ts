import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { TokenStorageService } from './tokenStorage.service';
import { CitaRequestDto, CitaResponseDto, CambiarEstadoCitaDto } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  public url: string;

  constructor(
    private _http: HttpClient,
    private _tokenStorage: TokenStorageService
  ) {
    this.url = Global.url;
  }

  private getHeaders(): HttpHeaders {
    const tenantId = this._tokenStorage.getTenantId() || 'CLINICA-GDI-01';
    const usuarioId = this._tokenStorage.getUserId() || 1;
    const token = this._tokenStorage.getToken();

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-tenant-id', tenantId)
      .set('x-usuario-id', usuarioId.toString());

    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    return headers;
  }

  agendarCita(cita: CitaRequestDto): Observable<any> {
    return this._http.post(`${this.url}/sanus-suite/citas/api/v1/agendar`, cita, {
      headers: this.getHeaders()
    });
  }

  obtenerAgenda(inicioIso: string, finIso: string): Observable<any> {
    const params = new HttpParams()
      .set('inicio', inicioIso)
      .set('fin', finIso);

    return this._http.get(`${this.url}/sanus-suite/citas/api/v1/agenda`, {
      headers: this.getHeaders(),
      params: params
    });
  }

  cambiarEstado(payload: CambiarEstadoCitaDto): Observable<any> {
    return this._http.put(`${this.url}/sanus-suite/citas/api/v1/cambiar-estado`, payload, {
      headers: this.getHeaders()
    });
  }
}