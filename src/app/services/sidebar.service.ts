import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[]=[
    {
      titulo: 'Principal',
      icono:'mdi mdi-gauge',
      subMenu:[
        { titulo:'Main', url:'/'},
       /* { titulo:'Grafica', url:'grafica1'},
        { titulo:'ProgressBar', url:'progress'}, 
        { titulo:'Promesas', url:'promesas'},
        { titulo:'rxjs', url:'rxjs'}*/
        { titulo:'Emergencia', url:'triaje'},
       // { titulo:'Reporte Epidemio', url:'progress'},
        { titulo:'Configurar Alerta', url:'configurar'},
        { titulo:'Reporte Alerta', url:'alerta'},
        
      ]
    }
  ]
  constructor() { }
}
