export interface RecetaDetalleRequestDto {
  medicamento: string;
  formaFarmaceutica?: string;
  presentacion?: string;
  dosis: string;
  viaAdministracion: string;
  frecuencia: string;
  duracionTratamiento: string;
  indicacionesAdicionales?: string;
}

export interface RecetaMedicaRequestDto {
  pacienteId: number;
  notaEvolucionId?: number;
  observacionesGenerales?: string;
  firmado: boolean;
  medicamentos: RecetaDetalleRequestDto[];
}

export interface RecetaMedicaResponseDto {
  id: number;
  expedienteId: number;
  pacienteId: number;
  medicoId: number;
  fechaEmision: string;
  observacionesGenerales: string;
  firmado: boolean;
  fechaFirma: string;
  medicoNombreSnapshot: string;
  medicoCedulaSnapshot: string;
  medicamentos: RecetaDetalleRequestDto[];
}

export interface RespuestaApi<T> {
  folio: string;
  mensaje: string;
  resultado: T;
}