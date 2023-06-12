import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmergenciaForm } from '../interfaces/emergencia-form.interfaces';
import { tap } from 'rxjs/operators';
import { Emergencia } from '../models/emergencia.model';

const base_url = environment.base_url;

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Authorization': 'authkey',
    'userid': '1'
  })
};

@Injectable({
  providedIn: 'root'
})


export class EmergenciaService {


  constructor(private http: HttpClient) { }

 // crearFichaE(formData: EmergenciaForm) {
   crearFichaE(emergencia: { 
    apellidoPaterno: string, 
    apellidoMaterno: string,
    nombres: string,
    nroDocumento: string,
    direccion: string,
    activo: string,
    observacion: string,
    ciex: string,
    idTipoDocumentoCat02: string,
    idSexoCat02: string,
    idDestino: string,
    fechaNacimiento: string,
    fechaRegistro: string,
    /*   
    idRegUbigeoDireccion: string,
    correo: string,
    telefono: string, 
    idPrioridad: string,
    
    */
  }) {  
    console.log('creando EmergenciaForm')
    console.log('emergencia.fechaNacimiento:: '+emergencia.fechaNacimiento)

    const url = `${ base_url }/fichaE`;
    return this.http.post( url, emergencia);

  /*  return this.http.post(`${base_url}/fichaE`, formData, httpOptions)
      .pipe(
        tap((resp: any) => {
          console.log("respuesta" + resp)

          //  localStorage.setItem('token', resp.token)
        })
      )*/

  }

}
