import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AtencionHis } from 'src/app/models/atencionHis';  
import { Cita } from 'src/app/models/cita.model';
import { Especialidades } from 'src/app/models/especialidades.model';
import { ProgramacionDH } from 'src/app/models/programacionDH.model';
import { CitaService } from 'src/app/services/cita.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { ProgramacionDHService } from 'src/app/services/programacion-dh.service'; 
import Swal from 'sweetalert2';


@Component({
  selector: 'app-his',
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.css']
})


export class HisComponent implements OnInit {
 

  public totalRegistros: number = 0;
  public cargando: boolean = true;
  public atencionHis: AtencionHis[] = []; 
  public textoBusqueda: any; 
  public searchTerm: string = '';
  public p: number = 1; 
  public currentDate: string;
  public sortColumn: string = '';
  public sortDirection: string = '';
  public pacientes: Cita[] = []; 
  public especialidades: Especialidades[] = [];
  public medicos: ProgramacionDH[] = [];
  public hisBusquedaForm: FormGroup<any>;

  selectedEspecialidad: any;
  fechaAtencion: any;
  especialidad: Especialidades;

 
  pageSize: number = 10;

  constructor(
    private fb: FormBuilder,
    private especialidadesService: EspecialidadesService,
    private programacionDHService: ProgramacionDHService,
    private citaService: CitaService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.cargando = true;
    
  }

  ngOnInit(): void {
       // Agregar las instancias al arreglo atencionHis 

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    this.currentDate = `${year}-${month}-${day}`;
    this.selectedEspecialidad = '0';
    this.cargarUps();
    

    this.hisBusquedaForm = this.fb.group({ 
      fechaAtencion: [''],
      id: [''],
      medico: [''],
      turno: [''],
      actividad: [''],
      especialidad: [new Especialidades('id','','','')],
    });

  }

  cargarUps(){
    this.especialidadesService.getEspecialidades()
        .subscribe((especialidades: Especialidades[]) => { 
          this.especialidades = especialidades; 
          console.log("data ciex: "+this.especialidades.length);
        });
   }
  
   getGlobalIndex(i: number): number {
    return (this.p - 1) * this.pageSize + i + 1;
  }
  Buscar(){
    if(this.fechaAtencion == null){
      Swal.fire('Error', 'Debe seleccionar una fecha para búsqueda.');
    }else{
      this.citaService.getPacientesAtendidos(this.fechaAtencion,this.selectedEspecialidad)
      .subscribe((pacientes: Cita[]) => { 
        this.pacientes = pacientes; 
        console.log("data ciex: " + this.pacientes.length);
      },
      error => {
        this.pacientes = [];
        // Lógica para manejar el error
      }); 
    }

   /* console.log("Buscar: " + this.selectedEspecialidad);
    console.log("fechaAtencion: " + this.fechaAtencion);
    if(this.fechaAtencion != undefined){
      this.programacionDHService.getProgramacionMedicos(this.fechaAtencion,this.selectedEspecialidad)
      .subscribe((medicos: ProgramacionDH[]) => { 
        this.medicos = medicos; 
        console.log("data ciex: "+this.medicos.length);
      },
      error => {
        // Lógica para manejar el error del inicio de sesión
        this.medicos = [];
       // Swal.fire('Error', 'No se encontraron resultados');
       // console.error('Error de inicio de sesión:', error);
      });
    }*/

  }
  /*.subscribe(
    response => {
      // Lógica para manejar la respuesta exitosa del inicio de sesión
      console.log('Inicio de sesión exitoso:', response);
      this.router.navigateByUrl('/');
    }
  );*/
  Search() {
    if (this.textoBusqueda == "") {
      this.Buscar();
    } else {
      this.medicos = this.medicos.filter(res => {
       // return res.especialidad.toLocaleLowerCase().match(this.textoBusqueda.toLocaleLowerCase())
       return res.especialidad.nombreEspecialidad.toLowerCase().includes(this.textoBusqueda.toLowerCase())/* ||
              res.nombreMedico.toLowerCase().includes(this.textoBusqueda.toLowerCase());*/
      });
    }
  }
  filterData() {
    this.medicos = this.medicos.filter(item => {
      // Aplica la lógica de filtrado según tus necesidades
      return item.especialidad.nombreEspecialidad.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  // Componente de tabla
sort(column: string) {
  if (column === this.sortColumn) {
    // Si la columna es la misma, invertir la dirección de clasificación
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    // Si la columna es diferente, establecer la nueva columna y la dirección ascendente
    this.sortColumn = column;
    this.sortDirection = 'asc';
  }

  // Realizar la clasificación de los datos
  this.medicos.sort((a, b) => {
    const aValue = a[this.sortColumn];
    const bValue = b[this.sortColumn];

    if (aValue < bValue) {
      return this.sortDirection === 'asc' ? -1 : 1;
    } else if (aValue > bValue) {
      return this.sortDirection === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });
}
mostrarMiComponente = false;

abrirModalPacientes(atencionObj: ProgramacionDH) {
  console.log("se abre otro html" + atencionObj.especialidad.nombreEspecialidad);
  const navigationExtras: NavigationExtras = {
    state: {
      atencion: atencionObj
    }
  };
  this.router.navigate(['/dashboard/hisPaciente'], navigationExtras); 
}

}
