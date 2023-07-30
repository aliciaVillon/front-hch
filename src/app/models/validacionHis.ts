import { Cita } from "./cita.model";


export class ValidacionHis {

    constructor( 
        public id: number,
        public observacion: string, 
        public nroDocumento: string, 
        public cita: Cita,
    ){}
   
}