export enum EstadoCitaEnum {
  PROGRAMADA = 'PROGRAMADA',
  CONFIRMADA = 'CONFIRMADA',
  EN_CONSULTA = 'EN_CONSULTA',
  ATENDIDA = 'ATENDIDA',
  CANCELADA = 'CANCELADA',
  NO_ASISTIO = 'NO_ASISTIO'
}

export interface CitaRequestDto {
  id?: number;
  pacienteId: number;
  fechaHoraInicio: string; // ISO String (YYYY-MM-DDTHH:mm:ss)
  fechaHoraFin: string;
  motivoConsulta?: string;
  observaciones?: string;
}

export interface CitaResponseDto {
  id: number;
  pacienteId: number;
  pacienteNombre: string;
  pacienteTelefono?: string;
  expedienteId?: number;
  numeroExpediente?: string;
  medicoId: number;
  medicoNombre: string;
  fechaHoraInicio: string;
  fechaHoraFin: string;
  motivoConsulta?: string;
  estado: EstadoCitaEnum;
  observaciones?: string;
  notaEvolucionId?: number;
}

export interface CambiarEstadoCitaDto {
  citaId: number;
  nuevoEstado: EstadoCitaEnum;
}