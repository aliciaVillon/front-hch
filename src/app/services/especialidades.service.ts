import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Especialidades } from '../models/especialidades.model';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

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
  getEspecialidades() {
    const url = `${base_url}/especialidad/listadoEspecialidades`;
    console.log("getEspecialidades " + url);
  
    return this.http.get<{ message: string; data: Especialidades[] }>(url).pipe(
      map((resp) => resp.data)
    );
  }

  
}
