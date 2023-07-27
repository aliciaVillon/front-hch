import { Paciente } from "./paciente.model";


export class Episodio {

    constructor( 
        public id: string,
        public periodo: string,
        public estado: string, 
        public tipoPaciente: string
    ){}
   
}
 