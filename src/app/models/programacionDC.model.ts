import { Ciex } from "./ciex.model";
import { Generic } from "./generic";
import { Persona } from "./persona.model";
import { ProgramacionCB } from "./programacionCB.model";
import { Renaes } from "./renaes";

 

export class ProgramacionDC implements Generic{

    constructor( 
        public id: string,
        public periodo: string,
        public idUnidadOrg: string, 
        public estado: string,
        public medico: Persona, 
        public programacionCB: ProgramacionCB, 
    ){}
   
}       