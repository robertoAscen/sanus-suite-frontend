import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { TokenStorageService } from './tokenStorage.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
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

  getResumenDashboard(): Observable<any> {
    return this._http.get(`${this.url}/sanus-suite/dashboard/api/v1/resumen`, {
      headers: this.getHeaders()
    });
  }
}