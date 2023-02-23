import { Component, OnInit } from '@angular/core';
import { SettigService } from '../services/settig.service';

declare function customInitFunction(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settigService: SettigService) { }

  ngOnInit(): void {
    customInitFunction();
  }


}
