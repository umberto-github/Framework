import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../services/datasharing.service';
import { DataItemAlarms } from '../structures/alarms';
import { DataItemLogin } from '../structures/login';


@Component({
  selector: 'app-menu-box-left',
  templateUrl: './menu-box-left.component.html',
  styleUrls: ['./menu-box-left.component.css']
})
export class MenuBoxLeftComponent implements OnInit {

  constructor(public datash: DatasharingService) { }

  ngOnInit(): void {  }

  //gestisco il logout
  onLogoutClick(){
    this.datash.dataitemlogin = new DataItemLogin();
    this.datash.btnlogin_disable = false;
    this.datash.btnlogout_disable = true;
    this.datash.username = '';
    this.datash.password = '';
  }

}
