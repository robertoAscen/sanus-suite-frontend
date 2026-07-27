import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global'; // Asegúrate de que apunte a tu archivo global de URLs

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Construimos la URL usando tu constante Global y el context-path de tu API
  private apiUrl = `${Global.url}/sanus-suite/api/v1/auth`;

  constructor(private http: HttpClient) {}

  // Recibe correo y contrasena listos para enviar por POST en el Body
  login(credentials: { username: string; password: string }): Observable<any> {
    console.log('Enviando credenciales al Backend:', credentials);
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
}