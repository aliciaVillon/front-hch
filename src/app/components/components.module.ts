import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';
import { NgChartsModule } from 'ng2-charts';
//import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';

import {NgxChartsModule} from '@swimlane/ngx-charts' 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
   // GraficoBarraHorizontalComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
   // GraficoBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
  //  BrowserAnimationsModule,
    //NgxChartsModule,
  ]
})
export class ComponentsModule { }
