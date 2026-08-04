import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HistoriaClinicaRequestDto, HistoriaClinicaResponseDto, RespuestaApi } from '../models/historia-clinica.model';
import { Global } from './global';
import { TokenStorageService } from '../services/tokenStorage.service'; // Inyectamos el storage

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {
  public url: string;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {
    this.url = Global.url;
  }

  private getHeaders(): HttpHeaders {
    // Limpiamos cualquier comilla residual que deje JSON.stringify/parse
    const rawTenant = this.tokenStorage.getTenantId();
    const rawUser = this.tokenStorage.getUserId();

    const tenantId = rawTenant ? String(rawTenant).replace(/"/g, '') : 'CLINICA-GDI-01';
    const userId = rawUser ? String(rawUser).replace(/"/g, '') : '1';

    return new HttpHeaders().set('Content-Type', 'application/json').set('x-tenant-id', tenantId).set('x-usuario-id', userId);
  }

  guardar(dto: HistoriaClinicaRequestDto): Observable<HistoriaClinicaResponseDto> {
    return this.http
      .post<
        RespuestaApi<HistoriaClinicaResponseDto>
      >(`${this.url}/sanus-suite/historias-clinicas/api/v1/guardar`, dto, { headers: this.getHeaders() })
      .pipe(map((response) => response.resultado));
  }

  obtenerPorExpediente(numeroExpediente: string): Observable<HistoriaClinicaResponseDto> {
    return this.http
      .get<
        RespuestaApi<HistoriaClinicaResponseDto>
      >(`${this.url}/sanus-suite/historias-clinicas/api/v1/expediente/${numeroExpediente}`, { headers: this.getHeaders() })
      .pipe(map((response) => response.resultado));
  }

  /**
   * Envía la solicitud para firmar y sellar legalmente la Historia Clínica.
   * Transmite el userId recuperado de la sesión activa como QueryParam.
   */
  firmar(historiaId: number): Observable<HistoriaClinicaResponseDto> {
    return this.http
      .post<
        RespuestaApi<HistoriaClinicaResponseDto>
      >(`${this.url}/sanus-suite/historias-clinicas/api/v1/firmar/${historiaId}`, {}, { headers: this.getHeaders() })
      .pipe(map((response) => response.resultado));
  }
}
