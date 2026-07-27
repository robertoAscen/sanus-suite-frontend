import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../services/tokenStorage.service'; // Ajusta la ruta

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.tokenStorage.getToken();

    if (token) {
      // Token válido existente, permitimos el acceso
      return true;
    }

    // No hay token, redirigimos al login guardando la ruta de intento
    this.router.navigate(['/auth/signin-v2'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}