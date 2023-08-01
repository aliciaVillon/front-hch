import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//import { Cita } from 'src/app/models/cita.model';
import { ValidacionHis } from 'src/app/models/validacionHis';
import { CitaService } from 'src/app/services/cita.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'; 
import { Trama } from 'src/app/models/ws-his/trama';
import { TramaHis } from 'src/app/models/tramaHis';
import { Personal_atiende } from 'src/app/models/ws-his/personal_atiende';
import { Personal_registra } from 'src/app/models/ws-his/personal_registra';
import { Paciente } from 'src/app/models/ws-his/paciente';
import { Cita } from 'src/app/models/ws-his/cita';
import { Examenfisico } from 'src/app/models/ws-his/examenfisico';
import { Items } from 'src/app/models/ws-his/items';
import { Labs } from 'src/app/models/ws-his/labs';

@Component({
  selector: 'app-his-enviar-trama',
  templateUrl: './his-enviar-trama.component.html',
  styleUrls: ['./his-enviar-trama.component.css']
})

export class HisEnviarTramaComponent implements OnInit {
  public pacientes: Cita[] = []; 
  public validaciones: ValidacionHis[] = []; 
  public tableData: any[] = [];
  public tramaJsonHis: TramaHis[] = [];
  fechaAtencion: any;
  cantHis: number;
  idEspecialidad: any;
  pageSize: number = 5;
  p: number = 1; 
  enviar : number = 0;
  validacionesTrama: ValidacionHis;
  tramaHisMinsa: Trama;

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

  enviarTrama(){

    this.citaService.getObtenerTrama(this.fechaAtencion,this.idEspecialidad,"44960406")
    .subscribe((tramaJsonHis: TramaHis[]) => { 
      this.tramaJsonHis = tramaJsonHis;  
      this.enviar = 1;
    },
    error => {
      Swal.fire('Error', 'Ocurrió un eror al listar trama de envío.');
    }); 
    console.log("inicia envío")
    if(this.enviar == 1){
      this.tramaJsonHis.map(trama => {
        this.tramaHisMinsa = new Trama(
          new Personal_atiende(
            trama.nrodocumentoMed, 
            trama.apematernoMed, 
            trama.idpaisMed, 
            trama.idprofesion, 
            trama.fechanacimientoMed,
            trama.nombresMed, 
            trama.idtipodocMed, 
            trama.apepaternoMed, 
            trama.idsexoMed, 
            trama.idcondicion 
          ),
          new Personal_registra(
            trama.nrodocumentoUsu,
            trama.apematernoUsu,
            trama.idpaisUsu,
            trama.idprofesionUsu,
            trama.fechanacimientoUsu,
            trama.nombresUsu,
            trama.idtipodocUsu,
            trama.apepaternoUsu,
            trama.idsexoUsu,
            trama.idcondicionUsu,
          ),
          new Paciente(  
            trama.nrodocumentoPac,
            trama.apematernoPac,
            trama.idpaisPac,
            trama.idflag,  
            trama.fechanacimientoPac,
            trama.nombresPac,
            trama.idtipodocPac,
            trama.apepaternoPac,
            trama.idetniaPac,
            trama.idsexoPac, 
            trama.nrohistoriaclinica,
            trama.idestablecimiento  
          ),
          new Cita(  
             "",
            trama.fechaatencion,
            "A",
            trama.idups,
            trama.idestablecimiento,
            trama.diaedad,
            trama.edadregistro,
            trama.idturno,
            trama.idtipedadregistro,
            "3",
            trama.mesedad,
            "",
            trama.finan,
            trama.idtipocondestab,
            trama.idtipocondserv,
            trama.annioedad,
              new Examenfisico(
                trama.peso,
                trama.talla,
                trama.hemoglobina,
                trama.perimetrocefalico,
                trama.perimetroabdominal
              ),
              new Items (        
                "D",
                "M170",
                "CX",
                 new Labs(
                 "3",
                 "PV"
                 ))
          ));

       /* this.tramaHisMinsa.personal_atiende.nrodocumento = trama.nrodocumentoMed,
        this.tramaHisMinsa.personal_atiende.apematerno = trama.apematernoMed,
        this.tramaHisMinsa.personal_atiende.idpais = trama.idpaisMed,
        this.tramaHisMinsa.personal_atiende.idprofesion = trama.idprofesion,
        this.tramaHisMinsa.personal_atiende.fechanacimiento = trama.fechanacimientoMed,
        this.tramaHisMinsa.personal_atiende.nombres = trama.nombresMed,
        this.tramaHisMinsa.personal_atiende.idtipodoc = trama.idtipodocMed,
        this.tramaHisMinsa.personal_atiende.apepaterno = trama.apepaternoMed,
        this.tramaHisMinsa.personal_atiende.idsexo = trama.idsexoMed,
        this.tramaHisMinsa.personal_atiende.idcondicion = trama.idcondicion,
      
        this.tramaHisMinsa.personal_registra.nrodocumento = trama.nrodocumentoUsu,
        this.tramaHisMinsa.personal_registra.apematerno = trama.apematernoUsu,
        this.tramaHisMinsa.personal_registra.idpais = trama.idpaisUsu,
        this.tramaHisMinsa.personal_registra.idprofesion = trama.idprofesionUsu,
        this.tramaHisMinsa.personal_registra.fechanacimiento = trama.fechanacimientoUsu,
        this.tramaHisMinsa.personal_registra.nombres = trama.nombresUsu,
        this.tramaHisMinsa.personal_registra.idtipodoc = trama.idtipodocUsu,
        this.tramaHisMinsa.personal_registra.apepaterno = trama.apepaternoUsu,
        this.tramaHisMinsa.personal_registra.idsexo = trama.idsexoUsu,
        this.tramaHisMinsa.personal_registra.idcondicion = trama.idcondicionUsu,

        this.tramaHisMinsa.cita.numeroafiliacion = "",
        this.tramaHisMinsa.cita.fechaatencion = trama.fechaatencion,
        this.tramaHisMinsa.cita.estadoregistro ="A";
        this.tramaHisMinsa.cita.idups = trama.fechaatencion,
        this.tramaHisMinsa.cita.idestablecimiento = trama.idestablecimiento,
        this.tramaHisMinsa.cita.diaedad = trama.diaedad,
        this.tramaHisMinsa.cita.edadregistro = trama.edadregistro,
        this.tramaHisMinsa.cita.idturno = trama.idturno,
        this.tramaHisMinsa.cita.idtipedadregistro = trama.idtipedadregistro,
        this.tramaHisMinsa.cita.fgdiag = "3",
        this.tramaHisMinsa.cita.mesedad = trama.mesedad,
        this.tramaHisMinsa.cita.componente = "",
        this.tramaHisMinsa.cita.idfinanciador = trama.finan,
        this.tramaHisMinsa.cita.idtipocondestab = trama.idtipocondestab,
        this.tramaHisMinsa.cita.idtipocondserv = trama.idtipocondserv,
        this.tramaHisMinsa.cita.annioedad = trama.annioedad,

        this.tramaHisMinsa.cita.examenfisico.peso = trama.peso,
        this.tramaHisMinsa.cita.examenfisico.talla = trama.talla,
        this.tramaHisMinsa.cita.examenfisico.hemoglobina = trama.hemoglobina,
        this.tramaHisMinsa.cita.examenfisico.perimetrocefalico = trama.perimetrocefalico,
        this.tramaHisMinsa.cita.examenfisico.perimetroabdominal = trama.perimetroabdominal,
          
        this.tramaHisMinsa.cita.items.labs.codigo ="3",
        this.tramaHisMinsa.cita.items.labs.valor ="PV",

        this.tramaHisMinsa.cita.items.tipodiagnostico = "D",
        this.tramaHisMinsa.cita.items.codigo ="M170",
        this.tramaHisMinsa.cita.items.tipoitem ="CX",

                this.tramaHisMinsa.paciente.nrodocumento = trama.nrodocumentoPac,
        this.tramaHisMinsa.paciente.apematerno = trama.apematernoPac,
        this.tramaHisMinsa.paciente.idflag = trama.idflag, 
        this.tramaHisMinsa.paciente.idpais = trama.idpaisPac, 
        this.tramaHisMinsa.paciente.fechanacimiento = trama.fechanacimientoPac,
        this.tramaHisMinsa.paciente.nombres = trama.nombresPac,
        this.tramaHisMinsa.paciente.idtipodoc = trama.idtipodocPac,
        this.tramaHisMinsa.paciente.apepaterno = trama.apepaternoPac,
        this.tramaHisMinsa.paciente.idsexo = trama.idsexoPac,
        this.tramaHisMinsa.paciente.idetnia = trama.idetniaPac,
        this.tramaHisMinsa.paciente.idestablecimiento = trama.idestablecimiento,
        this.tramaHisMinsa.paciente.nrohistoriaclinica = trama.nrohistoriaclinica,
  */




          this.citaService.postEnviarTrama(this.tramaHisMinsa)
          .subscribe((resp: any) => {  
            const estado = resp.estado;
            console.log("resp.estado " + resp.estado);
            this.validacionesTrama.observacion = "Ok",
            this.validacionesTrama.cita.id = trama.idcita,
            this.validacionesTrama.cita.flagCita = trama.tipocita,
            this.validacionesTrama.cita.periodo = trama.periodo,
            this.validacionesTrama.cita.flagHis = "1",

            this.citaService.postActualizarFlgHis(this.validacionesTrama)
            .subscribe((resp: any) => {  
            },
            error => { 
              //this.citaService.postActualizarFlgHis(this.validacionesTrama)
              // Lógica para manejar el error
            }); 
          })
 
      }); 
    } 
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
