import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cita } from 'src/app/models/cita.model';
import { ValidacionHis } from 'src/app/models/validacionHis';
import { CitaService } from 'src/app/services/cita.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-his-enviar-trama',
  templateUrl: './his-enviar-trama.component.html',
  styleUrls: ['./his-enviar-trama.component.css']
})
export class HisEnviarTramaComponent implements OnInit {
  public pacientes: Cita[] = []; 
  public validaciones: ValidacionHis[] = []; 
  fechaAtencion: any;
  cantHis: number;
  idEspecialidad: any;
  pageSize: number = 5;
  public p: number = 1; 

  public tableData: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public modalRef: MatDialogRef<HisEnviarTramaComponent>,
    private citaService: CitaService
  ) { }

  ngOnInit(): void {
    this.pacientes = this.data.pacientes as Cita[];
    this.fechaAtencion = this.data.fechaAtencion as any;
    this.idEspecialidad = this.data.idEspecialidad as any;
    console.log(" this.fechaAtencion " +  this.fechaAtencion);
     //this.respuestas = this.data.respuestas as Respuesta[];
     this.buscar();

   }
 
   downloadExcel(): void {
    this.tableData = this.validaciones.map(validacion => {
      return {
        ID_ATENCION: validacion.cita.id,
        FECHA_CITA: validacion.cita.fechaCita,
        NOMBRE_PACIENTE: validacion.cita.paciente.persona.apellidoPaterno + ' '+
                  validacion.cita.paciente.persona.apellidoMaterno + ' '+
                  validacion.cita.paciente.persona.primerNombre,
        NRO_DOCUMENTO: validacion.nroDocumento,
        NOMBRE_ESPECIALIDAD: validacion.cita.especialidad.nombreEspecialidad,
        OBSERVACION: validacion.observacion,
      };
    });
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.tableData);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'atencionObservacion.xlsx');
  }

   buscar(){
    if(this.fechaAtencion == null){
      Swal.fire('Error', 'Debe seleccionar una fecha para búsqueda.');
    }else{
      this.citaService.getHisValidacion(this.fechaAtencion,this.idEspecialidad)
      .subscribe((validaciones: ValidacionHis[]) => { 
        this.validaciones = validaciones; 
        console.log("data ciex: " + this.validaciones.length);
        this.cantHis =  this.validaciones.length;
      },
      error => {
        this.cantHis = 0;
        console.log("no se encontraron resultados: ");
        this.validaciones = [];
        // Lógica para manejar el error
      }); 
    } 

  }

  getGlobalIndex(i: number): number {
    return (this.p - 1) * this.pageSize + i + 1;
  }

  cerrar(): void {
     this.modalRef.close();
  }

}
