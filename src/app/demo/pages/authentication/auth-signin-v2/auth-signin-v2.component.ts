// Angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AuthService } from '../../../../services/auth.service'; 
import { TokenStorageService } from '../../../../services/tokenStorage.service'; 

@Component({
  selector: 'app-auth-signin-v2',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-signin-v2.component.html',
  styleUrls: ['./auth-signin-v2.component.scss']
})
export default class AuthSigninV2Component implements OnInit {
  usernameValue = '';
  userPassword = '';

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService // <-- SOLUCIÓN: Inyectamos el almacenamiento
  ) {
    // Si ya hay sesión usando tu TokenStorageService, redirigimos directamente
    if (this.tokenStorage.getToken()) {
      this.router.navigate(['dashboard', 'analytics']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [this.usernameValue, Validators.required],
      password: [this.userPassword, Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard/analytics';
    this.setupPasswordToggle();
  }

  get formValues() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.error = '';
    this.loading = true;

    // Ajustado para que las llaves mapeen lo que espera tu Backend real de Sanus Suite
    const credenciales = {
      username: this.formValues?.['username']?.value,
      password: this.formValues?.['password']?.value
    };

    this.authService
      .login(credenciales)
      .pipe(first())
      .subscribe({
        next: (respuesta: any) => {
          console.log('¡Respuesta cruda del backend!', respuesta);

          // Evaluamos la estructura común del backend buscando el token
          const tokenExtraido = respuesta.resultado.token;
          const usernameExtraido = respuesta.resultado.username;
          const fullNameExtraido = respuesta.resultado.fullName;
          const tenantIdExtraido = respuesta.resultado.tenantId;
          const rolesExtraido: any[] = respuesta.resultado.roles;

          if (tokenExtraido) {
            // Guardamos de forma limpia usando tu servicio centralizado
            this.tokenStorage.saveToken(tokenExtraido);
            this.tokenStorage.saveFullDataUser(usernameExtraido, fullNameExtraido, tenantIdExtraido, rolesExtraido);
          }

          this.loading = false;
          this.submitted = false;

          // Redirección por segmentos limpios para Lazy Loading
          this.router.navigate(['dashboard', 'analytics']);
        },
        error: (err) => {
          this.loading = false;
          console.error('Error en login:', err);
          if (err.error && err.error.mensaje) {
            this.error = err.error.mensaje;
          } else {
            this.error = 'Credenciales incorrectas o servidor inaccesible.';
          }
        }
      });
  }

  private setupPasswordToggle() {
    setTimeout(() => {
      const togglePassword = document.querySelector('#togglePassword');
      const passwordInput = document.querySelector('#password');

      togglePassword?.addEventListener('click', (event: Event) => {
        const passwordElement = passwordInput as HTMLInputElement;
        if (passwordElement) {
          const type = passwordElement.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordElement.setAttribute('type', type);
        }

        const iconElement = event.currentTarget as HTMLElement;
        if (iconElement) {
          iconElement.classList.toggle('icon-eye');
          iconElement.classList.toggle('icon-eye-off');
        }
      });
    }, 200);
  }
}