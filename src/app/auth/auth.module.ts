import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule  } from '@angular/common/http'; 
import { EmergenciaComponent } from '../pages/emergencia/emergencia.component';
import { ConfigurarComponent } from '../components/configurar/configurar.component';
import { HisComponent } from '../pages/his/his/his.component';
import { HisEnviadosComponent } from '../pages/his/his-enviados/his-enviados.component';
import { HisEnviarTramaComponent } from '../pages/his/his-enviar-trama/his-enviar-trama.component';
import { HisPacientesComponent } from '../pages/his/his-pacientes/his-pacientes.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EmergenciaComponent,
    ConfigurarComponent,
    HisComponent,
    HisEnviadosComponent,
    HisEnviarTramaComponent,
    HisPacientesComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    EmergenciaComponent,
    ConfigurarComponent,
    HisComponent,
    HisEnviadosComponent,
    HisEnviarTramaComponent,
    HisPacientesComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class AuthModule { }
