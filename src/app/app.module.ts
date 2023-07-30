import { NgModule } from '@angular/core';
/***Mpodulos */
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';  
//import { HisPacientesModalComponent } from './components/modal/his-pacientes-modal/his-pacientes-modal.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
//import { HisComponent } from '../app/pages/his/his/his.component';
//import { NgxPaginationModule } from 'ngx-pagination'; 
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent, 
  //  HisPacientesModalComponent,
  //  HisComponent, 
  ],
  entryComponents: [ 
  ],
  
  imports: [
    AppRoutingModule,
    PagesModule,
    BrowserModule, 
    BrowserAnimationsModule,  
    MatDialogModule ,
    MatButtonModule
  //  NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
