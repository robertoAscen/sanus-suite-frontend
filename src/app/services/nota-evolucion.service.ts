import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  NotaEvolucionRequestPayload, 
  NotaEvolucionListDto, 
  NotaEvolucionResponseDto,
  NotaEvolucionUpdateDto 
} from '../models/nota-evolucion.model';
import { TokenStorageService } from '../services/tokenStorage.service';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class NotaEvolucionService {

  public url: string;
  private readonly API_URL = '/sanus-suite/notas-evolucion/api/v1';

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {
    this.url = Global.url;
  }

  /**
   * Helper privado para generar los headers multitenant requeridos por la API.
   */
  private getHeaders(): HttpHeaders {
    const tenantId = this.tokenStorageService.getTenantId() || '';
    const userId = this.tokenStorageService.getUserId() || '';

    return new HttpHeaders({
      'x-tenant-id': String(tenantId),
      'x-usuario-id': String(userId)
    });
  }

  /**
   * Guarda o actualiza una nota de evolución.
   */
  guardarOActualizar(payload: NotaEvolucionRequestPayload): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.url}${this.API_URL}/guardar`, payload, { headers });
  }

  /**
   * Actualiza una nota existente.
   */
  actualizar(payload: NotaEvolucionUpdateDto): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put<any>(`${this.url}${this.API_URL}/actualizar`, payload, { headers });
  }

  // En src/app/services/nota-evolucion.service.ts

obtenerPorNumeroExpediente(numExpediente: string): Observable<any> {
  const token = localStorage.getItem('access_token');
  const tenantId = localStorage.getItem('tenant_id') || 'CLINICA-GDI-01';
  const usuarioId = localStorage.getItem('usuario_id') || '1'; // Header 'x-usuario-id' requerido por tu Controller

  let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('x-tenant-id', tenantId)
    .set('x-usuario-id', usuarioId);

  if (token) {
    headers = headers.set('Authorization', 'Bearer ' + token);
  }

  // Apunta a la ruta exacta de tu @GetMapping("/expediente/{numExpediente}")
  return this.http.get(`${this.url}${this.API_URL}/expediente/${numExpediente}`, { headers });
}

  /**
   * Obtiene el detalle de una nota de evolución por ID.
   */
  obtenerPorId(id: number): Observable<NotaEvolucionResponseDto> {
    const headers = this.getHeaders();
    return this.http.get<NotaEvolucionResponseDto>(`${this.url}${this.API_URL}/${id}`, { headers });
  }
}