import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmergenciaForm } from '../interfaces/emergencia-form.interfaces';
import { tap } from 'rxjs/operators';
import { Emergencia } from '../models/emergencia.model';
import { Ciex } from '../models/ciex.model';
import { Observable } from 'rxjs';

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
    ciex: Ciex[],
    idTipoDocumentoCat02: string,
    idSexoCat02: string,
    idDestino: string,
    fechaNacimiento: string,
    fechaRegistro: string,
     
    idRegUbigeoDireccion: string,
     /* correo: string,
    telefono: string, 
    idPrioridad: string,
    
    */
  }) {  
    console.log('creando EmergenciaForm')
    console.log('emergencia.fechaNacimiento:: '+emergencia.fechaNacimiento)

    const url = `${ base_url }/fichaE`;
    return this.http.post( url, emergencia);
  }

  public grabar(entity: Emergencia): Observable<Emergencia>{
    const formData = new FormData();
    formData.append('apellidoPaterno', entity.apellidoPaterno);
    formData.append('apellidoMaterno', entity.apellidoMaterno);
    formData.append('nombres', entity.nombres);
    formData.append('nroDocumento', entity.nroDocumento);
    formData.append('direccion', entity.direccion);
    formData.append('observacion', entity.observacion);
    formData.append('ciex', entity.ciex.idciex);
    formData.append('idTipoDocumentoCat02', entity.idTipoDocumentoCat02);
    formData.append('idSexoCat02', entity.idSexoCat02);
    formData.append('idDestino', entity.idDestino);
    formData.append('fechaNacimiento', entity.fechaNacimiento);
    formData.append('idRegUbigeoDireccion', entity.idRegUbigeoDireccion);

    const url = `${ base_url }/fichaE`;
    return this.http.post<Emergencia>( url, formData);

  }

}
