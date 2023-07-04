import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Ubigeo } from 'src/app/models/ubigeo.model'; 
import { Ciex } from '../models/ciex.model';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor(private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  } 


  getDepartamentos() {
    const url = `${base_url}/ubigeo/departamentos`;
    return this.http.get<Ubigeo[]>(url);
  }

  getProvinciasByDepartamentoId(idDepartamento: string){
    console.log("idDepar "+ idDepartamento);
    const url = `${base_url}/ubigeo/departamentos/${idDepartamento}/provincias`;
    return this.http.get<Ubigeo[]>(url);
}
getDistritos(idDepartamento: string, idProvincia: string){
  console.log("idDepar "+ idDepartamento);
  console.log("idProvincia "+ idProvincia);
  const url = `${base_url}/ubigeo/departamentos/${idDepartamento}/provincias/${idProvincia}/distritos`;
  return this.http.get<Ubigeo[]>(url);
}
  /*cargarDepartamentos() { 
    const url = `${base_url}/ubigeo/departamentos`;
    console.log("ubigeo :: cargarDepartamentos");
    return this.http.get(url, this.headers)
      .pipe(
        map((resp:  {ok: boolean, departamentos: Ubigeo[] }) =>   resp.departamentos)
      ); */
     /* 
    }
     .pipe(
        map( (resp: any) => {
          const { email, google, nombre, role, img = '', uid } = resp.usuario;
          this.usuario = new Usuario( nombre, email, '', img, google, role, uid );
          
          this.guardarLocalStorage( resp.token, resp.menu );
  
          return true;
        }),*/
  
 

}
