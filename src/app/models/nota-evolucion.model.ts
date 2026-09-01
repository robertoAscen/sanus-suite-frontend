export interface SignosVitales {
  presionArterial?: string;
  frecuenciaCardiaca?: number;
  frecuenciaRespiratoria?: number;
  temperatura?: number;
  peso?: number;
  talla?: number;
  imc?: number;
  saturacionOxigeno?: number;
}

export interface NotaEvolucionModel {
  id?: number;
  numeroExpediente?: string;
  pacienteId: number;
  medicoId?: number;
  historiaClinicaId?: number;
  fechaConsulta?: string | Date;
  subjetivo: string;
  objetivo?: string;
  analisis: string;
  planTratamiento?: string;
  signosVitales: SignosVitales;
  fecha?: any;
  plan?: string;
}

export interface NotaEvolucionRequestPayload {
  id?: number;
  numeroExpediente?: string;
  pacienteId: number;
  medicoId?: number;
  historiaClinicaId?: number;
  fechaConsulta?: string;
  subjetivo: string;
  objetivo?: string;
  analisis: string;
  planTratamiento?: string;
  firmado?: boolean;
  // Signos vitales normalizados en el payload
  presionArterial?: string;
  frecuenciaCardiaca?: number;
  frecuenciaRespiratoria?: number;
  temperatura?: number;
  peso?: number;
  talla?: number;
  imc?: number;
  saturacionOxigeno?: number;
}

export interface NotaEvolucionListDto {
  id: number;
  pacienteId: number;
  numeroExpediente: string;
  nombrePaciente?: string;
  medicoId: number;
  nombreMedico?: string;
  historiaClinicaId?: number;
  fechaConsulta: string;
  subjetivo: string;
  objetivo: string;
  analisis: string;
  planTratamiento: string;
  presionArterial?: string;
  frecuenciaCardiaca?: number;
  frecuenciaRespiratoria?: number;
  temperatura?: number;
  peso?: number;
  talla?: number;
  imc?: number;
  saturacionOxigeno?: number;
  firmado: boolean;
  fechaFirma?: string;
  firmadoPorMedicoId?: number;
  signosVitales?: SignosVitales;
}

export interface NotaEvolucionResponseDto extends NotaEvolucionListDto {}

export interface NotaEvolucionRequestDto extends NotaEvolucionRequestPayload {
  firmado: boolean;
}

export interface NotaEvolucionUpdateDto extends NotaEvolucionRequestDto {
  id: number;
}