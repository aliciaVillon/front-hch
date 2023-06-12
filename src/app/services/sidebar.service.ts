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
        { titulo:'Emergencia', url:'triaje'},
      //  { titulo:'Reporte Epidemio', url:'progress'},
        { titulo:'Reporte Alerta', url:'progress'}
      ]
    }
  ]
  constructor() { }
}
