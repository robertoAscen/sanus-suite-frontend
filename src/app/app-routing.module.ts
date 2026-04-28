// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/signin-v2',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then((module) => module.DashboardModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then((module) => module.LayoutModule)
      },
      {
        path: 'widget',
        loadChildren: () => import('./demo/widget/widget.module').then((module) => module.WidgetModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./demo/users/users.module').then((module) => module.UsersModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then((module) => module.UiBasicModule)
      },
      {
        path: 'advance',
        loadChildren: () => import('./demo/ui-elements/ui-advance/ui-advance.module').then((module) => module.UiAdvanceModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/forms/forms.module').then((module) => module.FormsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/table/tbl-bootstrap/tbl-bootstrap.module').then((module) => module.TblBootstrapModule)
      },
      {
        path: 'tbl-datatable',
        loadComponent: () => import('./demo/table/tbl-datatable/tbl-datatable.component')
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/chart-maps/core-chart/core-chart.module').then((module) => module.CoreChartModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/chart-maps/core-maps/core-maps.module').then((module) => module.CoreMapsModule)
      },
      {
        path: 'email',
        loadChildren: () => import('./demo/application/email/email.module').then((module) => module.EmailModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./demo/application/task/task.module').then((module) => module.TaskModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('./demo/application/todo/todo.module').then((module) => module.TodoModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./demo/application/gallery/gallery.module').then((module) => module.GalleryModule)
      },
      {
        path: 'helpdesk',
        loadChildren: () => import('./demo/application/helpdesk/helpdesk.module').then((module) => module.HelpdeskModule)
      },
      {
        path: 'editor',
        loadChildren: () => import('./demo/extension/editor/editor.module').then((module) => module.EditorModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./demo/extension/invoice/invoice.module').then((module) => module.InvoiceModule)
      },
      {
        path: 'full-calendar',
        loadChildren: () =>
          import('./demo/extension/full-event-calendar/full-event-calendar.module').then((module) => module.FullEventCalendarModule)
      },
      {
        path: 'file-upload',
        loadComponent: () => import('./demo/extension/file-upload/file-upload.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
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
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then((module) => module.MaintenanceModule)
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./demo/pages/maintenance/mainten-error/mainten-error.component').then((c) => c.MaintenErrorComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
