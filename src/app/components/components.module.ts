import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';
import { NgChartsModule } from 'ng2-charts';
import { ModalComponent } from '../pages/modal/modal.component'; 


@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
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
