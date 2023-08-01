import { Examenfisico } from "./examenfisico";
import { Items } from "./items";

export class Cita {

    constructor(  
        public numeroafiliacion: string,
		public fechaatencion: string,
		public estadoregistro: string,
		public idups: string,
		public idestablecimiento: string,
		public diaedad: string,
		public edadregistro: string,
		public idturno: string,
		public idtipedadregistro: string,
		public fgdiag: string,
		public mesedad: string,
		public componente: string,
		public idfinanciador: string,
		public idtipocondestab: string,
		public idtipocondserv: string,
		public annioedad: string,
		public examenfisico: Examenfisico,
		public items: Items
     ){}  
}     