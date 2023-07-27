 
import { Especialidades } from "./especialidades.model";
import { Persona } from "./persona.model";


export class Paciente {

    constructor( 
        public id: string,
        public version: string,
        public numeroHC: string, 
        public estado: string,
        public persona: Persona
    ){}
   
}       