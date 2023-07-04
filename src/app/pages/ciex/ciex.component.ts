import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ciex } from '../../models/ciex.model';
@Component({
  selector: 'app-ciex',
  templateUrl: './ciex.component.html',
  styleUrls: ['./ciex.component.css']
})
export class CiexComponent implements OnInit,  OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
   // this.imgSubs.unsubscribe();
  }
}
