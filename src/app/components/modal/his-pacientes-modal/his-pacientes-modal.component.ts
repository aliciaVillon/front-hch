import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cita } from 'src/app/models/cita.model';



@Component({
  selector: 'app-his-pacientes-modal',
  templateUrl: './his-pacientes-modal.component.html',
  styleUrls: ['./his-pacientes-modal.component.css']
})
export class HisPacientesModalComponent implements OnInit {
  public pacientes: Cita[] = []; 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public modalRef: MatDialogRef<HisPacientesModalComponent>) { }

  ngOnInit(): void {
    this.pacientes = this.data.pacientes as Cita[];
   // this.examen = this.data.examen as Examen;
    //this.respuestas = this.data.respuestas as Respuesta[];
  }

  cerrar(): void {
    this.modalRef.close();
  }

}
