import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cita } from '../models/cita.model';
import { ValidacionHis } from '../models/validacionHis';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { }

  getPacientesAtendidos(fecha: string,idEspecialidad: string) {
    const url = `${base_url}/cita/listadoPacientes/${fecha}/${idEspecialidad}`;
    console.log("getPacientesAtendidos " + url); 

    return this.http.get<{ message: string; data: Cita[] }>(url).pipe(
      map((resp) => resp.data)
    );
  }

  getHisValidacion(fecha: string,idEspecialidad: string) {
    const url = `${base_url}/his/listarValidacion/${fecha}/${idEspecialidad}`; 
    return this.http.get<{ message: string; data: ValidacionHis[] }>(url).pipe(
      map((resp) => resp.data)
    );
  }
}
