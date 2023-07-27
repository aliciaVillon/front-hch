import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interfaces';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { tap, map, catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CargarUsuario } from '../interfaces/cargar-usuarios.interface';

const base_url = environment.base_url_seguridad;
 
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public auth2: any;
  public usuario: Usuario; 

  constructor(private http: HttpClient,
              private router: Router,
              private ngZone: NgZone) {

      this.googleInit();
  }
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get role(): 'ADMIN_ROLE' | 'USER_ROLE' | undefined {
     return this.usuario.role ;
  }

   

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  googleInit() {

    return new Promise( resolve => {
      gapi.load('auth2', () => {
        console.log("auth2");
        this.auth2 = gapi.auth2.init({
          
          client_id: '1045072534136-oqkjcjvo449uls0bttgvl3aejelh22f5.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });

        resolve;
      });
    })

  }

  guardarLocalStorage( token: string, menu: any ) {

    localStorage.setItem('token', token );
    localStorage.setItem('menu', JSON.stringify(menu) );

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
 
  validarToken(): Observable<boolean> {
    console.log("validarToken()" + this.token);
    return this.http.get(`${ base_url }/renew`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map( (resp: any) => {
        const { email, google, nombres, role, img = '', id } = resp.usuario;
        this.usuario = new Usuario( nombres, email, '', img, google, role,id );
        
        this.guardarLocalStorage( resp.token, resp.menu );

        return true;
      }),
      catchError( error => of(false) )
    );

  }


 /* login(email: string, password: string) {
    const body = { email, password };
    return this.http.post(`${base_url}/usuario/login`, body);
  }*/

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
 /* actualizarPerfil( data: { email: string, nombre: string, role?: string } ) {

    data = {
      ...data,
      role: this.usuario.role
    }

    return this.http.put(`${ base_url }/usuarios/${ this.id }`, data, this.headers );

  }*/
/*
  login( formData: LoginForm ) {
    
    return this.http.post(`${ base_url }/login`, formData )
                .pipe(
                  tap( (resp: any) => {
                    this.guardarLocalStorage( resp.token, resp.menu );
                  })
                ); 
  }*/
  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post(`${base_url}/login`, body).pipe(
      tap( (resp: any) => {
        this.guardarLocalStorage( resp.token, resp.menu );
      })
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
 /*
  cargarUsuarios( desde: number = 0 ) {

    const url = `${ base_url }/usuarios?desde=${ desde }`;
    return this.http.get<CargarUsuario>( url, this.headers )
            .pipe(
              map( resp => {
                const usuarios = resp.usuarios.map( 
                  user => new Usuario(user.nombre, user.email, '', user.img,   user.role )  
                );
                return {
                  total: resp.total,
                  usuarios
                };
              })
            )
  }*/


  eliminarUsuario( usuario: Usuario ) {
    
      // /usuarios/5eff3c5054f5efec174e9c84
      const url = `${ base_url }/usuarios/${ usuario.id }`;
      return this.http.delete( url, this.headers );
  }

  guardarUsuario( usuario: Usuario ) {

    return this.http.put(`${ base_url }/usuarios/${ usuario.id }`, usuario, this.headers );

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



 
}

