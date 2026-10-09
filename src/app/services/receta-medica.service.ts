import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecetaMedicaRequestDto, RecetaMedicaResponseDto, RespuestaApi } from '../models/receta.model';
import { TokenStorageService } from './tokenStorage.service';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class RecetaMedicaService {

  public url: string;
  private readonly API_URL = '/sanus-suite/recetas/api/v1';

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {
    this.url = Global.url;
  }

  /**
   * Genera las cabeceras multitenant requeridas por la API.
   */
  private getHeaders(): HttpHeaders {
    const tenantId = this.tokenStorageService.getTenantId() || '';
    const userId = this.tokenStorageService.getUserId() || '';

    return new HttpHeaders({
      'x-tenant-id': String(tenantId),
      'x-usuario-id': String(userId)
    });
  }

  crearReceta(dto: RecetaMedicaRequestDto): Observable<RespuestaApi<number>> {
    const headers = this.getHeaders();
    return this.http.post<RespuestaApi<number>>(`${this.url}${this.API_URL}/guardar`, dto, { headers });
  }

  obtenerPorId(id: number): Observable<RespuestaApi<RecetaMedicaResponseDto>> {
    const headers = this.getHeaders();
    return this.http.get<RespuestaApi<RecetaMedicaResponseDto>>(`${this.url}${this.API_URL}/${id}`, { headers });
  }

  obtenerPdf(id: number): Observable<Blob> {
    const headers = this.getHeaders();
    return this.http.get(`${this.url}${this.API_URL}/${id}/pdf`, {
      headers,
      responseType: 'blob'
    });
  }
}