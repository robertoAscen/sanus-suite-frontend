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
    icon: '',
    children: [
      {
        id: 'citas',
        title: 'Citas',
        type: 'collapse',
        icon: 'feather icon-calendar', // Un calendario es perfecto para citas
        children: [
          {
            id: 'addCita',
            title: 'Agendar cita',
            type: 'item',
            url: '/citas/addCita',
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
    id: 'gestionInvetarios',
    title: 'GESTIÓN DE INVENTARIOS',
    type: 'group',
    icon: '',
    children: [
      {
        id: 'producto',
        title: 'Productos',
        type: 'collapse',
        icon: 'feather icon-package', // Un paquete/caja para inventario
        children: [
          {
            id: 'addProducto',
            title: 'Añadir Producto',
            type: 'item',
            url: '/productos/addProducto',
            breadcrumbs: false
          },
          {
            id: 'productoList',
            title: 'Catálogo de Productos',
            type: 'item',
            url: '/productos/productoList',
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
