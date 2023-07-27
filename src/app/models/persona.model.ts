 
import { Especialidades } from "./especialidades.model";


export class Persona {

    constructor( 
        public id: string,
        public version: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public primerNombre: string,
        public segundoNombre: string,
        public estado: string,
        public sexo: string,
        public etnia: string,
        public edad: string
    ){}
   
}  