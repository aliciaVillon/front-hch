import { Episodio } from "./episodio.model";
import { Especialidades } from "./especialidades.model";
import { Paciente } from "./paciente.model";


export class Cita {

    constructor( 
        public id: string,
        public periodo: string,
        public estado: string, 
        public flagHis: string,
        public paciente: Paciente,
        public episodio: Episodio,
        public especialidad: Especialidades,
        public fechaCita: string,
    ){}
   
}
 