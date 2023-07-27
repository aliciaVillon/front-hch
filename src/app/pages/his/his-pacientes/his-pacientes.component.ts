import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from 'src/app/models/cita.model';
import { ProgramacionDH } from 'src/app/models/programacionDH.model';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-his-pacientes',
  templateUrl: './his-pacientes.component.html',
  styleUrls: ['./his-pacientes.component.css']
})
export class HisPacientesComponent implements OnInit {

  public pacientes: Cita[] = []; 
  atencion: ProgramacionDH | undefined;

  constructor(private router: Router,
              private citaService: CitaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void { 
    console.log(this.route.snapshot.params['atencion']);


    const state = this.route?.root?.firstChild?.snapshot?.data['state'];
    if (state && state.atencion) {
      this.atencion = state.atencion;
      console.log("Objeto recibido:", this.atencion);
      // Ahora puedes usar this.atencion y acceder a sus propiedades
    } else {
      // Manejo del caso en que no se reciba el objeto correctamente
    }

    this.listar();


      // Utilizamos Type Assertion para indicar que confiamos en que 'data' tiene la propiedad 'state'
  /*  const navigation: any = this.route.snapshot.data;
    if (navigation && navigation.state && navigation.state.atencion) {
      this.atencion = navigation.state.atencion;
      this.listar();
    }else{
      console.log("navigation null ");
    } */
  }

  enviarTrama(){

  }
  listar() {  
    console.log("atencion es null ");
   /* if (this.atencion) {
      console.log("atencion.id " + this.atencion.especialidad.nombreEspecialidad);
      console.log("atencion.periodo " + this.atencion.periodo);
*/
      this.citaService.getPacientesAtendidos("045967", "2023")
        .subscribe((pacientes: Cita[]) => { 
          this.pacientes = pacientes; 
          console.log("data ciex: " + this.pacientes.length);
        },
        error => {
          this.pacientes = [];
          // Lógica para manejar el error
        }); 
   /* }else{
      console.log("atencion es null ");
    }*/
  }

  regresar(){
 this.router.navigate(['/dashboard/his']);
  }
}
