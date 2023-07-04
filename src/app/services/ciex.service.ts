import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Ciex } from '../models/ciex.model';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class CiexService {

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
  getCiex() {
    const url = `${base_url}/ciex`;
    console.log("getCiex " + url);
  
    return this.http.get<{ message: string; data: Ciex[] }>(url).pipe(
      map((resp) => resp.data)
    );
  }

  
}
