import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HaederComponent } from './haeder/haeder.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HaederComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HaederComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
