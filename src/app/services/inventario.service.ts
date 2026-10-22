import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { TokenStorageService } from './tokenStorage.service';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
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

  getProductosList(): Observable<any> {
    return this._http.get(`${this.url}/sanus-suite/inventario/api/v1/listar`, {
      headers: this.getHeaders()
    });
  }

  crearProducto(payload: any): Observable<any> {
    return this._http.post(`${this.url}/sanus-suite/inventario/api/v1/crear`, payload, {
      headers: this.getHeaders()
    });
  }
}