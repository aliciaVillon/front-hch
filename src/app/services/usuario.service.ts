import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interfaces';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { tap, map, catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public auth2: any;
  public usuario: Usuario;

  constructor(private http: HttpClient,
    private router: Router,
    private ngZone: NgZone) {

     // this.googleInit();
  }
  get token(): string {
    return localStorage.getItem('token') || '';
  }
/*
  get role(): 'ADMIN_ROLE' | 'USER_ROLE' {
     return this.usuario.role;
  }
*/
  get uid():string {
    return this.usuario.id || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post(`${base_url}/usuario/login`, body);
  }
  crearUsuario(formData: RegisterForm) {
    console.log('creando usuario')

    return this.http.post(`${base_url}/usuarios`, formData)
      .pipe(
        tap((resp: any) => {
          //console.log(resp)

          localStorage.setItem('token', resp.token)
        })
      )
  }

  loginUsuario(formData: LoginForm) {
    console.log('login usuario')
    console.log(formData)
    return this.http.post(`${base_url}/usuario/login`, formData)
      .pipe(
        tap((resp: any) => {
          console.log(resp)

          localStorage.setItem('token', resp.token)
        })
      )
  }
  guardarLocalStorage( token: string, menu: any ) {

    localStorage.setItem('token', token );
    localStorage.setItem('menu', JSON.stringify(menu) );

  }
  
  validarToken(): Observable<boolean> {
    console.log("validarToken()");
    return this.http.get(`${ base_url }/login/renew`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map( (resp: any) => {
        const { email, google, nombre, role, img = '', uid } = resp.usuario;
        this.usuario = new Usuario( nombre, email, '', img, google, role, uid );
        
        this.guardarLocalStorage( resp.token, resp.menu );

        return true;
      }),
      catchError( error => of(false) )
    );

  }
  loginGoogle(token: string) {
    return this.http.post(`${base_url}/login/google`, { token })
      .pipe(
        tap((resp: any) => {
          console.log(resp)
          localStorage.setItem('token', resp.token)
        })
      )

  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('menu');

    this.auth2.signOut().then(() => {

      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      })
    });

  }
}

