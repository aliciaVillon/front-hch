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
import { NgxPaginationModule } from 'ngx-pagination';
import { HisPacientesModalComponent } from '../components/modal/his-pacientes-modal/his-pacientes-modal.component'


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EmergenciaComponent,
    ConfigurarComponent,
    HisComponent,
    HisEnviadosComponent,
    HisEnviarTramaComponent,
    HisPacientesModalComponent
  ],
  entryComponents: [
    HisPacientesModalComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    EmergenciaComponent,
    ConfigurarComponent,
    HisComponent,
    HisEnviadosComponent,
    HisEnviarTramaComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule, 
  ]
})
export class AuthModule { }
