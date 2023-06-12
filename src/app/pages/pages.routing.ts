import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmergenciaComponent } from "./emergencia/emergencia.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { PromesasComponent } from "./promesas/promesas.component";
//import { GraficoBarraHorizontalComponent } from "../components/grafico-barra-horizontal/grafico-barra-horizontal.component";

const routes: Routes=[
    {
        path: 'dashboard', 
        component:PagesComponent,
        children:[ 
          {path: '', component:DashboardComponent},
       //   {path: '', redirectTo:'dashboard',pathMatch: 'full'}, 
          {path: 'progress', component:ProgressComponent},
          {path: 'grafica1', component:Grafica1Component},
          {path: 'account-settings', component:AccountSettingsComponent},
          {path: 'promesas', component:PromesasComponent},
          {path: 'triaje', component:EmergenciaComponent},
       //   {path: 'reporte', component:GraficoBarraHorizontalComponent},
        ]
      },
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
  