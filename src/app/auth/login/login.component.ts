import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  public formSubmitted = false;
  public auth2: any;

  public loginForm = this.fb.group({
  //  email: [localStorage.getItem('email') ?? '', [ Validators.email]], 
    username: ['AVILLON', Validators.required],
    password: ['123456', Validators.required],
    remember: [false]
  });


  constructor( private router: Router,
               private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private ngZone: NgZone ) { }

  ngOnInit(): void {
    this.renderButton();
  }

  
  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.usuarioService.login(this.username, this.password)
      .subscribe(
        response => {
          // Lógica para manejar la respuesta exitosa del inicio de sesión
          console.log('Inicio de sesión exitoso:', response);
          this.router.navigateByUrl('/');
        },
        error => {
          // Lógica para manejar el error del inicio de sesión
          Swal.fire('Error', 'Usuario o password incorrectos.');
         // console.error('Error de inicio de sesión:', error);
        }
      );
  }



/*** 
  login() {
   // console.log("this.username.value:::" + this.loginForm.get('username')?.value);
   // console.log("this.password.value:::" + this.loginForm.get('password')?.value);
   console.log('Username:', this.username);
   console.log('Password:', this.password);

    this.usuarioService.login( this.loginForm.value )
      .subscribe( resp => {
        console.log("intenta login" );
        if ( this.loginForm.get('remember')?.value ){ 
          localStorage.setItem('email', this.loginForm.get('email')?.value ?? '');
        } else {
            localStorage.removeItem('email');
        }
        
        // Navegar al Dashboard
        console.log(" comienza a navegar " + resp);
        console.log({login: resp});
        this.router.navigateByUrl('/dashboard');
       // this.router.navigate(['/']);
       console.log(" no comienza a navegar");

      }, (err) => {
        // Si sucede un error
        Swal.fire('Error', err.error.msg, 'error' );
      });

  }*/
  
  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });

    this.startApp();

  }

  async startApp() {
    
    await this.usuarioService.googleInit();
    this.auth2 = this.usuarioService.auth2;

    this.attachSignin( document.getElementById('my-signin2') );
    
  };

  attachSignin(element) {
    
    this.auth2.attachClickHandler( element, {},
        (googleUser) => {
            const id_token = googleUser.getAuthResponse().id_token;
            console.log(id_token);
            this.usuarioService.loginGoogle( id_token )
              .subscribe( resp => {
                // Navegar al Dashboard
                this.ngZone.run( () => {
                  this.router.navigateByUrl('/');
                })
              });

        }, (error) => {
            alert(JSON.stringify(error, undefined, 2));
        });
  }

}
