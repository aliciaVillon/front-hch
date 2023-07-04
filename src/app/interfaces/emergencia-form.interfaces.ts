import { NonNullableFormBuilder } from "@angular/forms"; 


export interface EmergenciaForm{ 
    apellidoPaterno: string;
    apellidoMaterno: string;  
    nombres: string; 
    fechaNacimiento: string; 
    nroDocumento: string; 
    direccion: string; 
    telefono:string; 
    idTipoDocumentoCat02: string; 
    idSexoCat02: string; 
    idRegUbigeoDireccion: string; 
    correo: string; 
    observacion: string; 
    idPrioridad: string; 
    idDestino:string; 
    activo: string;  
    ciex: string; 
}
