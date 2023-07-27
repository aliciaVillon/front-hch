
 
import { Ciex } from "./ciex.model";
import { Generic } from "./generic";
import { ProgramacionDC } from "./programacionDC.model";
import { Renaes } from "./renaes";

 

export class ProgramacionDI implements Generic{

    constructor( 
        public id: string,
        public periodo: string,
        public nroDia: string,
        public fechaProgramacion: string,
        public estado: string,
        public direccion: string, 
        public programacionHorariaDC: ProgramacionDC
    ){}
   
} 