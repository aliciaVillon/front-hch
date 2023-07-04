import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-haeder',
  templateUrl: './haeder.component.html',
  styles: [
  ]
})
export class HaederComponent  {
  public usuario: Usuario;

  constructor( private usuarioService: UsuarioService,
               private router: Router ) {

    this.usuario = usuarioService.usuario;
    console.log(" this.usuario " +  this.usuario);
  }
  
  logout() {
    this.usuarioService.logout();
  }

  buscar( termino: string ) {

    if ( termino.length === 0  ) {
      return;
    }

    this.router.navigateByUrl(`/dashboard/buscar/${ termino }`);
  }

}
