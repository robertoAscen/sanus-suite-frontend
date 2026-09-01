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

  /**
   * Obtiene el listado de notas por número de expediente.
   */
  obtenerPorNumeroExpediente(numeroExpediente: string): Observable<NotaEvolucionListDto[]> {
    const headers = this.getHeaders();
    return this.http.get<NotaEvolucionListDto[]>(`${this.url}${this.API_URL}/expediente/${numeroExpediente}`, { headers });
  }

  /**
   * Obtiene el detalle de una nota de evolución por ID.
   */
  obtenerPorId(id: number): Observable<NotaEvolucionResponseDto> {
    const headers = this.getHeaders();
    return this.http.get<NotaEvolucionResponseDto>(`${this.url}${this.API_URL}/${id}`, { headers });
  }
}