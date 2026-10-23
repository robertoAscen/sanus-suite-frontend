export interface DetalleFacturaDto {
  productoId?: number;
  descripcion: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

export interface FacturaDto {
  id?: number;
  pacienteId: number;
  pacienteNombre?: string;
  fechaEmision?: string;
  subtotal: number;
  impuestos: number;
  total: number;
  estado: string; // PAGADA, PENDIENTE, CANCELADA
  detalles: DetalleFacturaDto[];
}