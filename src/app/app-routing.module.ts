// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AuthGuard } from './guards/auth.guard'; // <-- Ajustado a la Clase con Mayúscula

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard], // <-- RECOMENDACIÓN: Si pones el guard aquí, proteges TODO el Layout de Admin de un solo golpe
    children: [
      {
        path: '',
        redirectTo: 'dashboard', // Redirige al dashboard por defecto si ya está autenticado
        pathMatch: 'full'
      },
      {
        path: 'patients',
        // Si decidiste no proteger todo el admin, dejas el guard individual aquí:
        // canActivate: [AuthGuard],
        loadChildren: () => import('./components/pacientes/pacientes.module').then((module) => module.PacientesModule)
      },
      {
        path: 'historias-clinicas',
        loadChildren: () => import('./components/historia-clinica/historia-clinica.module').then((m) => m.HistoriaClinicaModule)
      },
      {
        path: 'notas-evolucion',
        loadChildren: () => import('./components/nota-evolucion/nota-evolucion.module').then((m) => m.NotaEvolucionModule)
      },
      {
        path: 'recetas-medica',
        loadChildren: () => import('./components/receta-medica/receta-medica.module').then((m) => m.RecetaMedicaModule)
      },
      {
        path: 'citas',
        loadChildren: () => import('./components/citas/citas.module').then((m) => m.CitasModule)
      },
      {
        path: 'factura',
        loadChildren: () => import('./components/factura/factura.module').then((m) => m.FacturaModule)
      },
      {
        path: 'inventario',
        loadChildren: () => import('./components/inventario/inventario.module').then((m) => m.InventarioModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((module) => module.AuthenticationModule)
      },
      {
        path: 'login', // Añadimos un puente limpio por si acceden directo a /login
        redirectTo: 'auth/signin-v2',
        pathMatch: 'full'
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then((module) => module.MaintenanceModule)
      }
    ]
  },
  // Redirección global por defecto si entran a la raíz sin sesión
  {
    path: '',
    redirectTo: 'auth/signin-v2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
