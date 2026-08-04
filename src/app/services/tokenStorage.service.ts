import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'access_token';
const USER_ID = 'id';
const USERNAME = 'username';
const FULLNAME = 'fullname';
const TENANTID = 'tenantId';
const ROLES = 'roles';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() {}

  logout(): void {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    // 1. Limpiamos residuos viejos de la plantilla para evitar falsos positivos
    window.localStorage.removeItem('serviceToken');
    window.localStorage.removeItem('user');
    
    // 2. Guardamos de forma segura bajo tus llaves de control
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.sessionStorage.setItem(ACCESS_TOKEN, token);
    window.localStorage.setItem(ACCESS_TOKEN, token); // Respaldo persistente
  }

  public getToken(): string | null {
    // Intentamos recuperar de sessionStorage, si no está (por F5), restauramos de localStorage
    let token = window.sessionStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      token = window.localStorage.getItem(ACCESS_TOKEN);
      if (token) {
        window.sessionStorage.setItem(ACCESS_TOKEN, token);
      }
    }
    return token;
  }

  public saveFullDataUser(username: any, userId: any, fullname: any, tenantId: any, roles: any[]): void {
    window.sessionStorage.removeItem(USERNAME);
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.removeItem(FULLNAME);
    window.sessionStorage.removeItem(TENANTID);
    window.sessionStorage.removeItem(ROLES);
    window.sessionStorage.setItem(USERNAME, JSON.stringify(username));
     window.sessionStorage.setItem(USER_ID, JSON.stringify(userId));
    window.sessionStorage.setItem(FULLNAME, JSON.stringify(fullname));
    window.sessionStorage.setItem(TENANTID, JSON.stringify(tenantId));
    window.sessionStorage.setItem(ROLES, JSON.stringify(roles));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USERNAME);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public getUserId(): any {
    const userId = window.sessionStorage.getItem(USER_ID);
    if (userId) {
      return JSON.parse(userId);
    }
    return null;
  }

  public getTenantId(): any{
    const tenantId = window.sessionStorage.getItem(TENANTID);
    if(tenantId){
      return JSON.parse(tenantId)
    }
    return null;
  }
}