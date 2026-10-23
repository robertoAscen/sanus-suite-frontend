export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'principal',
    title: 'INICIO',
    type: 'group',
    icon: '',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard',
        icon: 'feather icon-home',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'gestionExpedientes',
    title: 'GESTIÓN DE EXPEDIENTES',
    type: 'group',
    icon: '', // Los grupos no suelen llevar icono principal
    children: [
      {
        id: 'patients',
        title: 'Pacientes',
        type: 'collapse',
        icon: 'feather icon-user', // Ícono de usuario individual para el expediente
        children: [
          {
            id: 'addPaciente',
            title: 'Añadir Paciente',
            type: 'item',
            url: '/patients/addPatient',
            breadcrumbs: false
          },
          {
            id: 'patientList',
            title: 'Catálogo de Pacientes',
            type: 'item',
            url: '/patients/patientList',
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  {
    id: 'gestionCitas',
    title: 'GESTIÓN DE CITAS',
    type: 'group',
    children: [
      {
        id: 'citas',
        title: 'Citas y Agenda',
        type: 'collapse',
        icon: 'feather icon-calendar',
        children: [
          {
            id: 'addCita',
            title: 'Agendar Cita',
            type: 'item',
            url: '/citas/add-cita', // <-- ASEGURAR QUE DIGA /citas/ Y NO /patients/
            breadcrumbs: false
          },
          {
            id: 'citaList',
            title: 'Catálogo de Citas',
            type: 'item',
            url: '/citas/citaList',
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  {
    id: 'gestionInventario',
    title: 'INVENTARIO Y FARMACIA',
    type: 'group',
    icon: '',
    children: [
      {
        id: 'inventarioMenu',
        title: 'Catálogo y Stock',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'inventarioList',
            title: 'Ver Inventario',
            type: 'item',
            url: '/inventario/inventarioList',
            breadcrumbs: false
          },
          {
            id: 'addProducto',
            title: 'Nuevo Producto',
            type: 'item',
            url: '/inventario/addProducto',
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  {
    id: 'gestionFinanzas',
    title: 'ADMINISTRACIÓN Y FINANZAS',
    type: 'group',
    icon: '',
    children: [
      {
        id: 'caja',
        title: 'Notas de venta',
        type: 'collapse',
        icon: 'feather icon-credit-card', // Tarjeta o billete para finanzas/pagos
        children: [
          {
            id: 'addFactura',
            title: 'Añadir Factura',
            type: 'item',
            url: '/factura/addFactura',
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  {
    id: 'gestionReportes',
    title: 'REPORTES',
    type: 'group',
    icon: '',
    children: [
      {
        id: 'reporte',
        title: 'Reporte',
        type: 'collapse',
        icon: 'feather icon-bar-chart-2' // Una gráfica de barras para análisis
      }
    ]
  }
];
