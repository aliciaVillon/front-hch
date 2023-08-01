import { Cita } from "./cita";
import { Paciente } from "./paciente";
import { Personal_atiende } from "./personal_atiende";
import { Personal_registra } from "./personal_registra";

export class Trama { 
    constructor(   
      public personalAtiende: Personal_atiende,
      public personal_registra: Personal_registra,
      public paciente: Paciente,
      public cita: Cita
     ){}                             
   
}