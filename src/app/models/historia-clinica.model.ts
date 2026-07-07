export interface AntecedentesHeredofamiliares {
  diabetes?: string;
  hipertension?: string;
  cardiopatias?: string;
  neoplasias?: string;
  otrosHereditarios?: string;
}

export interface AntecedentesPersonalesPatologicos {
  enfermedadesCronicas?: string;
  alergias?: string;
  quirurgicos?: string;
  traumaticos?: string;
  transfusionales?: string;
  otrosPatologicos?: string;
}

export interface AntecedentesPersonalesNoPatologicos {
  habitosHigienicos?: string;
  alimentacion?: string;
  vivienda?: string;
  actividadFisica?: string;
  toxicomanias?: string;
}

export interface AntecedentesGinecoObstetricos {
  menarca?: number;
  cicloMenstrual?: string;
  gestas?: number;
  partos?: number;
  cesareas?: number;
  abortos?: number;
  fum?: string; // Lo manejamos como string para el binding con inputs tipo date (YYYY-MM-DD)
}

// Representa la relación simplificada del padre (Expediente)
export interface ExpedienteRef {
  id: number;
}

// Interfaz Maestra que mapea a HistoriaClinica.java
export interface HistoriaClinica {
  id?: number;
  tenantId?: string;
  expediente: ExpedienteRef;
  padecimientoActual: string;
  antecedentesHeredofamiliares: AntecedentesHeredofamiliares;
  antecedentesPersonalesPatologicos: AntecedentesPersonalesPatologicos;
  antecedentesPersonalesNoPatologicos: AntecedentesPersonalesNoPatologicos;
  antecedentesGinecoObstetricos?: AntecedentesGinecoObstetricos;
  
  // Campos de control clínico y firma legal
  firmado?: boolean;
  fechaFirma?: string;
  medicoFirmaId?: number;
}