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

  showModal = false;
  modalTitle = 'Modal Title';
  modalContent = 'Modal Content';

  onModalClosed() {
    this.showModal = false;
  }

  onModalSaved() {
    // Do something with the saved data
    this.showModal = false;
  }
}
