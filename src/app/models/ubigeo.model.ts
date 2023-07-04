interface _UbigeoPac {
    idRegistro: string;
    descripcion: string
}


export class Ubigeo {

    constructor(
        public idRegistro: String , 
        public idPais: String, 
        public idDepartamento: String, 
        public idProvincia: String, 
        public idDistrito: String, 
        public idUbigeo: String, 
        public descripcion: String, 
        public codigoInei: String, 
        public codigoReniec: String, 
        public estado: String, 
        public migrado: String, 
    ) {}

}

