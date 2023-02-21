import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  {

  [x: string]: any;

  @Input() title: string ='Sin titulo';

  @Input('labels') doughnutChartLabels: string[] = [ 'label 1', 'label 2', 'label 3' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]
  };
  public doughnutChartType:  ChartType = 'doughnut';
 /* public colors:Color[]=[
     {'#9E120E', '#FF5800'}
  ]*/


}
