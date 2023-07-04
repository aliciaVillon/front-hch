import { Component, OnInit } from '@angular/core';
import { SettigService } from 'src/app/services/settig.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  
  constructor(private settigService : SettigService) { }

  ngOnInit(): void { 
    this.settigService.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settigService.changeTheme(theme); 
  }

 
}
