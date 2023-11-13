import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programmers } from '../structures/programmers';

@Injectable({
  providedIn: 'root'
})

//QUESTA SERVIZIO LEGGE IL FILE DI CONFIGURAZIONE
//E RENDE I DATI DISPONIBILI AI COMPONENTI IN CUI E' INIETTATO
export class JsonconfigService {

  public jsondata: any;
  public baseUrl = ''; // Sostituisci con l'URL effettivo della tua Web API
  public alarmsUrl = '';
  public anomaliesUrl = '';
  public operatorsUrl = '';
  public logincheckUrl: string = '';
  public appversion: string = '';
  public frameinfo_system = '';
  public frameinfo_version = '';
  public frameinfo_wat = '';
  public programmers!: Programmers;
  public contactinfo: string = '';

  constructor(private http: HttpClient) {
    this.programmers = new Programmers();
    this.http.get('../../assets/config.json').subscribe((data) => {
      this.jsondata = data;
      this.baseUrl = this.jsondata.WebApiBaseUrl
      this.alarmsUrl = this.jsondata.WebApiAlarms
      this.anomaliesUrl = this.jsondata.WebApiAnomalies
      this.operatorsUrl = this.jsondata.WebApiOperators
      this.logincheckUrl = this.jsondata.WebApiLogin
      this.frameinfo_version = this.jsondata.FrameInfo_Version
      this.frameinfo_system = this.jsondata.FrameInfo_System
      this.frameinfo_wat = this.jsondata.FrameInfo_WAT
      //aggiungo l'elemento all'array dei programmatori
      for (let i = 1; i <= this.jsondata.NumberOfProgrammers; i++) {
        const propertyName = `Programmers_Pr${i}`;
        this.programmers.description.push(this.jsondata[propertyName])
      }

      this.contactinfo = this.jsondata.ContactInfo
      this.appversion = this.jsondata.AppVersion
    });
  }


}
