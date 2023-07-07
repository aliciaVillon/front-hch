import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';
import { NgChartsModule } from 'ng2-charts';
import { ModalComponent } from '../pages/modal/modal.component';
import { HisComponent } from '../pages/his/his/his.component';
import { HisEnviadosComponent } from '../pages/his/his-enviados/his-enviados.component'; 


@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent, 
  ],
  exports: [
    IncrementadorComponent,
    NgChartsModule,
    DonaComponent,
   // ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
   // ModalComponent
  ]
})
export class ComponentsModule { }
