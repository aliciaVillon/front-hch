import { Component, OnInit } from '@angular/core';
import { ChartType, Color } from 'chart.js';
import { ChartData, ChartEvent } from 'chart.js';
 
import { baseColors } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component  {

public labels1: string[] = [ 'GALLETA', 'GASEOSA', 'CHCOCOALTE' ];

public data1: ChartData<'doughnut'> = {
  labels: this.labels1,
  datasets: [
    { data: [ 10, 20, 45 ] }
  ]
};
 
}
