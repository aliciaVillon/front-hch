import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule  } from '@angular/common/http'; 
import { EmergenciaComponent } from '../pages/emergencia/emergencia.component';
import { ConfigurarComponent } from '../components/configurar/configurar.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EmergenciaComponent,
    ConfigurarComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    EmergenciaComponent,
    ConfigurarComponent,
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
