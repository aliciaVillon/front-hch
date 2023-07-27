import { Episodio } from "./episodio.model";
import { Paciente } from "./paciente.model";


export class Cita {

    constructor( 
        public id: string,
        public periodo: string,
        public estado: string, 
        public paciente: Paciente,
        public episodio: Episodio
    ){}
   
}
 