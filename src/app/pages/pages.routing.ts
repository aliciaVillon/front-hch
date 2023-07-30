import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { EmergenciaComponent } from "./emergencia/emergencia.component";
import { ReporteComponent } from "./reporte/reporte.component";
import { ConfigurarComponent } from "../components/configurar/configurar.component";
import { HisComponent } from "./his/his/his.component";
import { HisEnviadosComponent } from "./his/his-enviados/his-enviados.component";
import { AuthGuard } from "../guards/auth.guard";

const routes: Routes=[
    {
        path: 'dashboard', 
        component:PagesComponent,
        canActivate: [ AuthGuard ],
        canLoad: [ AuthGuard ],
        children:[ 
          {path: '', component:DashboardComponent, data:{titulo: 'Dashboard'}},
       //   {path: '', redirectTo:'dashboard',pathMatch: 'full'}, 
          {path: 'progress', component:ProgressComponent, data:{titulo: 'Progress'}},
          {path: 'grafica1', component:Grafica1Component, data:{titulo: 'Grafica1'}},
          {path: 'account-settings', component:AccountSettingsComponent, data:{titulo: 'Account-settings'}},
          {path: 'promesas', component:PromesasComponent, data:{titulo: 'Promesas'}},
          {path: 'triaje', component:EmergenciaComponent},
          {path: 'alerta', component:ReporteComponent},
          {path: 'his', component:HisComponent},
          {path: 'hisEnviados', component:HisEnviadosComponent}, 
          {path: 'configurar', component:ConfigurarComponent},
          {path: 'rxjs', component:RxjsComponent, data:{titulo: 'Rxjs'}},
        ]
      },
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes),
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
  