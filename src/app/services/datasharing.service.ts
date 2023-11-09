import { Injectable } from '@angular/core';
import { DataItemLogin } from '../structures/login';

@Injectable({
  providedIn: 'root'
})

//Questa classe contiene tutti i dati in condivisione tra componenti
export class DatasharingService {

  //------------------QUESTI DATI VENGONO SCAMBIATI TRA menu-box-left.component.html e popups.component.html--------------------------

  //dati di login
  public dataitemlogin: DataItemLogin = new DataItemLogin
  //disabilita il pulsante di login se il login è in corso
  public btnlogin_disable: boolean = false
  //disabilita il pulsante di login se il login è in corso
  public btnlogout_disable: boolean = false

  //login username
  public username: string = ''
  //login password
  public password: string = ''

  //----------------------------------------------------------------------------------------------------------------------------------

  constructor() { }
}
