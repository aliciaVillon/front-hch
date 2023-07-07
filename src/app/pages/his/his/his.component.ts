import { Component, OnInit } from '@angular/core';
import { AtencionHis } from 'src/app/models/atencionHis';  

@Component({
  selector: 'app-his',
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.css']
})


export class HisComponent implements OnInit {

  public totalRegistros: number = 0;
  public cargando: boolean = true;
  public atencionHis: AtencionHis[] = [];
  public atencionHisTemp: AtencionHis[] = [];
  textoBusqueda: any; 
  searchTerm: string = '';
  p: number = 1; 
  currentDate: string;
  sortColumn: string = '';
  sortDirection: string = '';

  constructor() {
    this.cargando = true;
  }

  ngOnInit(): void {
    const atencion1 = new AtencionHis(1, "Cardiología", "Dr. Pérez", 1);
    const atencion2 = new AtencionHis(2, "Dermatología", "Dr. Gómez", 2);
    const atencion3 = new AtencionHis(3, "Dermatología", "Dr. Gómez", 2);
    const atencion4 = new AtencionHis(4, "Gineco", "Dr. Gómez", 2);
    const atencion5 = new AtencionHis(5, "Dermatología", "Dr. Gómez", 2);
    const atencion6 = new AtencionHis(6, "Dermatología", "Dr. Gómez", 2);
    const atencion7 = new AtencionHis(7, "Dermatología", "Dr. Gómez", 2);
    const atencion8 = new AtencionHis(8, "Dermatología", "Dr. Gómez", 2);
    const atencion9 = new AtencionHis(9, "Dermatología", "Dr. Gómez", 2);
    const atencion10 = new AtencionHis(10, "Dermatología", "Dr. Andrie", 2);
    const atencion11 = new AtencionHis(11, "Dermatología", "Dr. Villon", 2);
    const atencion12 = new AtencionHis(12, "Dermatología", "Dr. Velez", 2)
    // Agregar las instancias al arreglo atencionHis
    this.atencionHis.push(atencion1, atencion2, atencion3, atencion4, atencion5, atencion6, atencion7
      , atencion8, atencion9, atencion10, atencion11, atencion12);

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    this.currentDate = `${year}-${month}-${day}`;
  }

  Search() {
    if (this.textoBusqueda == "") {
     this.ngOnInit();
    } else {
      this.atencionHis = this.atencionHis.filter(res => {
       // return res.especialidad.toLocaleLowerCase().match(this.textoBusqueda.toLocaleLowerCase())
       return res.especialidad.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
              res.nombreMedico.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      });
    }
  }
  filterData() {
    this.atencionHis = this.atencionHis.filter(item => {
      // Aplica la lógica de filtrado según tus necesidades
      return item.especialidad.toLowerCase().includes(this.searchTerm.toLowerCase());
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
  this.atencionHis.sort((a, b) => {
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

}
