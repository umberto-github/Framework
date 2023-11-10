import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../services/datasharing.service';
import { DataItemAlarms } from '../structures/alarms';
import { DataItemLogin } from '../structures/login';
import { SessionService } from '../services/session.service';
import { JsonconfigService } from '../services/jsonconfig.service';


@Component({
  selector: 'app-menu-box-left',
  templateUrl: './menu-box-left.component.html',
  styleUrls: ['./menu-box-left.component.css']
})
export class MenuBoxLeftComponent implements OnInit {

  constructor(public datash: DatasharingService, 
              private sessionService: SessionService, 
              public jsonConfigService: JsonconfigService) { }

  ngOnInit(): void {  }

  //gestisco il logout
  onLogoutClick(){
    this.datash.dataitemlogin = new DataItemLogin();
    this.datash.btnlogin_disable = false;
    this.datash.btnlogout_disable = true;
    this.datash.username = '';
    this.datash.password = '';
    this.removeSession('session-login');
  }

  //salvataggio della sessione di login
  saveToSession(key: string): void {
    const dataToSave = { 
      user: this.datash.dataitemlogin.username,
      name: this.datash.dataitemlogin.name,
      level: this.datash.dataitemlogin.level
    };
    this.sessionService.set(key, dataToSave);
  }

  //lettura della variabile di sessione
  readFromSession(key: string): void {
    const sessionData = this.sessionService.get(key);
    console.log('Dati dalla sessionStorage:', sessionData);
  }

  removeSession(key:string){
    this.sessionService.remove(key);
  }

  //cancellazione della variabili di sessione
  clearSession(): void {
    this.sessionService.clear();
  }

}
