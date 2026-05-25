export class Paciente {
    constructor(
        public id: number,
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public fechaNacimiento: string,
        public sexo: string,
        public curp: string,
        public direccion: string,
        public telefono: string,
        public contactoEmergenciaNombre: string,
        public contactoEmergenciaTelefono: string,
        public contactoEmergenciaParentesco: string
    ) { }
}