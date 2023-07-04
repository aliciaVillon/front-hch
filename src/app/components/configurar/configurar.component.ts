import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ciex } from 'src/app/models/ciex.model';
import { CiexService } from 'src/app/services/ciex.service';

@Component({
  selector: 'app-configurar',
  templateUrl: './configurar.component.html',
  styleUrls: ['./configurar.component.css']
})
export class ConfigurarComponent implements OnInit {

  public configurarForm: FormGroup<any>;
  diagnosticos: Ciex[] = [];
  selectedCiex: string;
  constructor(private fb: FormBuilder,
              private ciexService: CiexService) { }

  ngOnInit(): void {

    this.configurarForm = this.fb.group({
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      nombres: [''],
      nroDocumento: [''],
      direccion: [''],
      activo: ['1']
    });

    this.cargarDiagnosticos();
  }

  cargarDiagnosticos(){
    this.ciexService.getCiex()
        .subscribe((diagnosticos: Ciex[]) => { 
          this.diagnosticos = diagnosticos;
          console.log("data ciex: "+this.diagnosticos.length);
        });
   }

  guardar() {
  }

}
