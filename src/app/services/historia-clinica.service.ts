import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Global } from './global'; // Asegúrate de apuntar a tu archivo global de URLs
import { HistoriaClinica } from '../models/historia-clinica.model'; // Ajusta la ruta de tus modelos
import { TokenStorageService } from './tokenStorage.service';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {
  // URL base mapeada al @RequestMapping del Controller de Spring
  private readonly baseUrl = `${Global.url}/sanus-suite/historias-clinicas/api/v1`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenStorageService) {}

  /**
   * Helper para obtener los headers obligatorios de la API de Sanus Suite.
   * Modifica el 'clinica-default' por el método o token con el que manejes tus subdominios/tenants.
   */
  private getHeaders(): HttpHeaders {
    let tenantId = this.tokenService.getTenantId();
    console.log("tenant: " + tenantId);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-tenant-id': String(tenantId) // <-- Aquí inyectas tu identificador dinámico de base de datos
    });
  }

  /**
   * Recupera la historia clínica de un paciente mediante el ID del expediente
   * GET /historias-clinicas/api/v1/expediente/{expedienteId}
   */
  obtenerPorExpediente(numeroExpediente: string): Observable<HistoriaClinica> {
    return this.http.get<any>(`${this.baseUrl}/expediente/${numeroExpediente}`, { headers: this.getHeaders() })
      .pipe(
        map(response => response.resultado as HistoriaClinica) // Desempaquetamos la RespuestaApi.java
      );
  }

  /**
   * Guarda o actualiza un registro clínico completo (Antecedentes + Padecimiento actual)
   * POST /historias-clinicas/api/v1/guardar
   */
  guardarOActualizar(historia: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.post<any>(`${this.baseUrl}/guardar`, historia, { headers: this.getHeaders() })
      .pipe(
        map(response => response.resultado as HistoriaClinica)
      );
  }

  /**
   * Sella y bloquea legalmente la historia clínica utilizando el ID del médico actual
   * PUT /historias-clinicas/api/v1/firmar/{id}/medico/{medicoId}
   */
  firmarDocumento(historiaId: number, medicoId: number): Observable<HistoriaClinica> {
    return this.http.put<any>(`${this.baseUrl}/firmar/${historiaId}/medico/${medicoId}`, {}, { headers: this.getHeaders() })
      .pipe(
        map(response => response.resultado as HistoriaClinica)
      );
  }
}