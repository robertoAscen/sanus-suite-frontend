// Wrapper estándar de respuesta del Backend
export interface RespuestaApi<T> {
  codigoRespuesta: string;
  mensaje: string;
  resultado: T;
  detalles?: string[];
}

// Request DTO para enviar al backend al guardar/actualizar
export interface HistoriaClinicaRequestDto {
  id?: number;
  numeroExpediente: string;
  
  // CAMPOS CLÍNICOS
  motivoConsulta: string;
  padecimientoActual: string; // <-- OBLIGATORIO por backend (@NotBlank)
  antecedentesHeredofamiliares?: string;
  antecedentesPatologicos?: string;
  antecedentesNoPatologicos?: string;
  interrogatorioAparatosSistemas?: string;
  exploracionFisica?: string;
  diagnostico?: string;
  planTratamiento?: string;
}

// Response DTO recibido desde el backend
export interface HistoriaClinicaResponseDto {
  id: number;
  numeroExpediente: string;
  
  // CAMPOS CLÍNICOS
  motivoConsulta: string;
  padecimientoActual: string;
  antecedentesHeredofamiliares?: string;
  antecedentesPatologicos?: string;
  antecedentesNoPatologicos?: string;
  interrogatorioAparatosSistemas?: string;
  exploracionFisica?: string;
  diagnostico?: string;
  planTratamiento?: string;

  // FIRMA Y SEGURIDAD CLÍNICA (NOM-004)
  firmado: boolean;
  fechaFirma?: string;
  firmadoPorMedicoId?: number;

  // SNAPSHOT LEGAL
  medicoNombreSnapshot?: string;
  medicoCedulaSnapshot?: string;

  // AUDITORÍA
  tenantId: string;
  usuarioCreacion?: string;
  fechaCreacion?: string;
}