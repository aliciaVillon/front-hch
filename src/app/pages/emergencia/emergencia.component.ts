import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmergenciaService } from 'src/app/services/emergencia.service';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns'
import { UbigeoService } from 'src/app/services/ubigeo.service';
import { Ubigeo } from 'src/app/models/ubigeo.model';
import { environment } from 'src/environments/environment.prod';
import { Ciex } from 'src/app/models/ciex.model';
import { CiexService } from 'src/app/services/ciex.service';
import { Emergencia } from 'src/app/models/emergencia.model';
import { Generic } from 'src/app/models/generic';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.component.html',
  styleUrls: ['./emergencia.component.css']
})


export class EmergenciaComponent implements OnInit {
  emergencia: Emergencia;
  ciex: Ciex;
  emergenciaModel: Emergencia = new Emergencia();

  selectedDepartamento: string;
  selectedProvincia: string;
  selectedDistrito: string;
  selectedCiex: string;
  nombreCiex: string;
  protected redirect: '/login';
  diagnosticos: Ciex[] = [];
  departamentos: Ubigeo[] = [];
  provincias: Ubigeo[] = [];
  distritos: Ubigeo[] = [];
 
  public formSubmitted = false;
  public emergenciaForm: FormGroup<any>;

  inputValue: string;
  inputNombres: string;
  inputApellidoPater: string;

  convertToUpperCase(event: any) {
    this.inputValue = event.target.value.toUpperCase();
  }
  convertToUpperCaseApellidoPater(event: any) {
    this.inputApellidoPater = event.target.value.toUpperCase();
  }
  convertToUpperCaseNombre(event: any) {
    this.inputNombres = event.target.value.toUpperCase();
  }
  date: Date = new Date();
  formattedDate: string;

  showModal = false;
  modalTitle = 'Modal Title';
  modalContent = 'Modal Content';

  onModalClosed() {
    this.showModal = false;
  }

  onModalSaved() {
    // Do something with the saved data
    this.showModal = false;
  }
  constructor(private fb: FormBuilder,
    private emergenciaService: EmergenciaService,
    private ubigeoService: UbigeoService,
    private ciexService: CiexService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    
      this.emergenciaModel.ciex = new Ciex(1, 'idciex', 'descripcion', 0);
    }

  ngOnInit(): void {
    
 
    this.ubigeoService.getDepartamentos()
      .subscribe((data: Ubigeo[]) => {
        this.departamentos = data;
      });


    this.cargarDiagnosticos();
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
      ciex: [new Ciex(1, 'idciex', 'descripcion', 0)],
      idTipoDocumentoCat02: [''],
      idSexoCat02: [''],
      idDestino: [''],
      fechaNacimiento: [''],
      fechaRegistro: [this.formattedDate],
      idRegUbigeoDireccion: [''],
    });

    
  }
/*  get ciex(): FormArray {
    return this.emergenciaForm.get('ciex') as FormArray;
  }*/
 cargarDiagnosticos(){
  this.ciexService.getCiex()
      .subscribe((diagnosticos: Ciex[]) => { 
        this.diagnosticos = diagnosticos;
        console.log("data ciex: "+this.diagnosticos.length);
      });
 }

  cargarEmergencia(id: string) {

    if (id === 'nuevo') {
      return;
    }
  }

  guardarEmergencia() {
    console.log("idTipoDocumentoCat02:: "+ 
                 this.emergenciaModel.idTipoDocumentoCat02);
    
    const { nombre } = this.emergenciaForm.value;

   // this.emergenciaForm.get('ciex').setValue(this.selectedCiex);
   const ciexControl = this.emergenciaForm.get('ciex');
    if (ciexControl) {
      if (!this.ciex) {
        this.ciex = new Ciex(1, 'idciex', 'descripcion', 0);
      }
      this.ciex.idciex = this.selectedCiex;
      this.ciex.descripcion = this.nombreCiex;
      ciexControl.setValue(this.ciex);
    }
    console.log("ciexControl:: "+ciexControl);
    console.log("this.selectedCiex:: "+this.selectedCiex);
   // console.log("this.emergenciaForm.value.ciex.idciex::" + this.emergenciaForm.value.ciex.idciex); 
    this.emergenciaService.crearFichaE(this.emergenciaForm.value)
    .subscribe((resp: any) => {
      Swal.fire('Creado', `Registro creado correctamente`, 'success');
      this.router.navigateByUrl(`/dashboard/triaje`)
     // this.router.navigate([this.redirect]);

    })
    /*
      this.emergenciaService.grabar(this.emergenciaModel)
    .subscribe(c => { 
      Swal.fire(
        'Creado:',
        `${nombre} creado correctamente`,
        'success'
      );
    });
    */
  }
  onCiexChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCiex = target.value;
    const selectedOption = target.selectedOptions[0];
    const description = selectedOption?.textContent ?? '';

    this.nombreCiex = description;

    console.log("this.selectedCiex::" + this.selectedCiex); 

  }

  onDepartamentoChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedDepartamento = target.value;
    console.log("this.selectedDepartamento::" + this.selectedDepartamento); 

    this.ubigeoService.getProvinciasByDepartamentoId(this.selectedDepartamento).subscribe(
      data => {
        this.provincias = data;
      }
    );
  }
  onProvinciaChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedProvincia =  target.value;
    this.ubigeoService.getDistritos(this.selectedDepartamento, this.selectedProvincia).subscribe(
      data => {
        this.distritos = data;
      }
    );
  }  

}
