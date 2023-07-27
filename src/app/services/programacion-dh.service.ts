import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { ProgramacionDH } from '../models/programacionDH.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProgramacionDHService {

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
  getProgramacionMedicos(fecha: string,idEspecialidad: string) {
    const url = `${base_url}/progHorDH/listadoProgramacionMedico/${fecha}/${idEspecialidad}`;
    console.log("getProgramacionMedicos " + url); 

    return this.http.get<{ message: string; data: ProgramacionDH[] }>(url).pipe(
      map((resp) => resp.data)
    );
  }
}
