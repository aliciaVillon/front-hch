import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  
  // @ViewChild('googleBtn') googleBtn:ElementRef;
  public formSubmitted = false;

  public loginForm = this.fb.group(
    {
      password: ['', [Validators.required]],
      email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
      remember: [false]
    }, {

    Validators: this.passwordsIguales('1', '1')
  });


  passwordsIguales(pass1Name: string, pass2Name: string) {

  }
  constructor(private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit() {
 
      google.accounts.id.initialize({
      client_id: "871963525245-d84m70jikbk8g95ceb9lpji7s0ve8jg5.apps.googleusercontent.com",
      callback: (response:any) => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  handleCredentialResponse(response: any) {
    console.log({ esto: this })
    console.log("Encoded JWT ID token: " + response.credential);
    this.usuarioService.loginGoogle(response.credential).subscribe(
      resp =>{
        //console.log({login: resp});
        this.router.navigateByUrl('/');
      }
    );
  }

  login() {
    console.log("this.loginForm.value:::" + this.loginForm.value);
    this.usuarioService.login(this.loginForm.get('email')?.value, 
                this.loginForm.get('password')?.value)//this.loginForm.value)
      .subscribe(resp => {
        console.log('usuario loegado');
        if (this.loginForm.get('remember')?.value) {
          localStorage.setItem('email', this.loginForm.get('email')?.value);
        } else {
          localStorage.removeItem('email');
        }

        this.router.navigateByUrl('/');
      }, (err) => {
        Swal.fire('Error', 'Usuario no encontrado');
      });
  }
}
