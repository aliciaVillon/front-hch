import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthModule } from '../auth/auth.module'; 
import { FormsModule } from '@angular/forms'; 
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ReporteComponent } from './reporte/reporte.component';
import { CiexComponent } from './ciex/ciex.component';
import { ModalComponent } from './modal/modal.component'; 
import { HisComponent } from './his/his/his.component'; 
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
   DashboardComponent,
   ProgressComponent,
   Grafica1Component,
   PagesComponent, 
   AccountSettingsComponent, 
   PromesasComponent, 
   RxjsComponent, 
   ReporteComponent, 
   CiexComponent, 
   ModalComponent, 
   HisComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent, 
    AccountSettingsComponent,
    HisComponent
   ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    AuthModule, 
    FormsModule,
    ComponentsModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
