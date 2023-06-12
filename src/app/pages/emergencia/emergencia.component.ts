import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmergenciaService } from 'src/app/services/emergencia.service';
import Swal from 'sweetalert2' 
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns';

 

import { getMessaging, getToken } from "firebase/messaging";

const messaging = getMessaging();
// Add the public key generated from the console here.
getToken(messaging, {vapidKey: "BAqNAAEvwdwdHgJrvG4LKPy-Ch5YkrvtVPtWq8TY7-9xY4zBTCveJv54fO2_F0wsS2kgO0ZEsqN9faSyfJLS4kU"});
 


@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.component.html',
  styleUrls: ['./emergencia.component.css']
})


export class EmergenciaComponent implements OnInit {
  public formSubmitted = false;
  public emergenciaForm: FormGroup;
  
  date: Date = new Date();
  formattedDate: string;

  constructor(private fb: FormBuilder,
              private emergenciaService: EmergenciaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

    this.formattedDate = format(this.date, 'yyyy-MM-dd');

    this.activatedRoute.params
      .subscribe(({ id }) => this.cargarEmergencia(id));

    this.emergenciaForm = this.fb.group({
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      nombres: [''],
      nroDocumento: [''],
      direccion: [''],
      activo: ['1'],
      observacion: [''],
      ciex: [''],
      idTipoDocumentoCat02: [''],
      idSexoCat02: [''],
      idDestino: [''],
      fechaNacimiento: [''], 
      fechaRegistro: [ this.formattedDate], 

     
/* 
      idRegUbigeoDireccion: [''],
      telefono: [''],
      correo: [''], 
      idPrioridad: [''],
      
      */
    });

   // this.cargarHospitales();
/*
    this.medicoForm.get('hospital').valueChanges
      .subscribe(hospitalId => {
        this.hospitalSeleccionado = this.hospitales.find(h => h._id === hospitalId);
      })
  
*/
}
  cargarEmergencia(id: string) {

    if ( id === 'nuevo' ) {
      return;
    }
    /*
     this.emergenciaService.obtenerMedicoPorId( id )
      .pipe(
        delay(100)
      )
      .subscribe( medico => {

        if ( !medico ) {
          return this.router.navigateByUrl(`/dashboard/medicos`);
        }

        const { nombre, hospital:{ _id } } = medico; 
        this.medicoSeleccionado = medico;
        this.medicoForm.setValue({ nombre, hospital: _id });
      });
*/
  }

  guardarEmergencia() {

    const { nombre } = this.emergenciaForm.value;
  
      this.emergenciaService.crearFichaE( this.emergenciaForm.value )
          .subscribe( (resp: any) => {
            Swal.fire('Creado', `${ nombre } creado correctamente`, 'success');
           // this.router.navigateByUrl(`/dashboard/medico/${ resp.medico._id }`)


        })
    }
 
 
}
