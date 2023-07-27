  
import { Especialidades } from "./especialidades.model";
import { ProgramacionDI } from "./programacionDI.model";


export class ProgramacionDH {

    constructor( 
        public id: string,
        public periodo: string,
        public estado: string,
        public horarioInicio: string,
        public horarioFin: string,
        public actividad: string,
        public codigoEspecialidad: string,
        public especialidad: Especialidades,
        public programacionHorariaDI: ProgramacionDI
    ){}
   
}  