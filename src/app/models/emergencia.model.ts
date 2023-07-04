import { Ciex } from "./ciex.model";
import { Generic } from "./generic";
import { Renaes } from "./renaes";

 

export class Emergencia implements Generic{

  //  constructor(
        
        public apellidoPaterno: string;
        public apellidoMaterno: string;
        public nombres: string;
        public fechaNacimiento: string; 
        public nroDocumento: string;
        public direccion: string;
        public idTipoDocumentoCat02: string;
        public idSexoCat02: string;
        public idRegUbigeoDireccion: string;
        public correo: string;
        public telefono: string;
        public observacion: string;
        public idPrioridad: string;
        public idDestino: string;
        public activo: string;
        public ciex: Ciex; 
        public renaes: Renaes; 
  //  ){}
   
}