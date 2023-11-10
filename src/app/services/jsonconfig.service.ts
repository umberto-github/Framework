import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FrameWorkInfo } from '../structures/frameworkinfo';

@Injectable({
  providedIn: 'root'
})

//QUESTA SERVIZIO LEGGE IL FILE DI CONFIGURAZIONE
//E RENDE I DATI DISPONIBILI AI COMPONENTI IN CUI E' INIETTATO
export class JsonconfigService {

  public jsondata: any;
  public framewinfo!: FrameWorkInfo;
  public baseUrl = ''; // Sostituisci con l'URL effettivo della tua Web API
  public alarmsUrl = '';
  public anomaliesUrl = '';
  public operatorsUrl = '';
  public logincheckUrl: string = '';

  constructor(private http: HttpClient) {
    this.framewinfo = new FrameWorkInfo();
    this.http.get('../../assets/config.json').subscribe((data) => {
      this.jsondata = data;
      this.baseUrl = this.jsondata.WebApiBaseUrl
      this.alarmsUrl = this.jsondata.WebApiAlarms
      this.anomaliesUrl = this.jsondata.WebApiAnomalies
      this.operatorsUrl = this.jsondata.WebApiOperators
      this.logincheckUrl = this.jsondata.WebApiLogin
      this.framewinfo.frameinfo_version = this.jsondata.FrameInfo_Version
      this.framewinfo.frameinfo_system_os = this.jsondata.FrameInfo_System_OS
      this.framewinfo.frameinfo_system_ram = this.jsondata.FrameInfo_System_Ram
      this.framewinfo.frameinfo_system_cpu = this.jsondata.FrameInfo_System_Cpu
      this.framewinfo.frameinfo_wat_1 = this.jsondata.FrameInfo_WAT_1
      this.framewinfo.frameinfo_wat_2 = this.jsondata.FrameInfo_WAT_2
      this.framewinfo.frameinfo_wat_3 = this.jsondata.FrameInfo_WAT_3
      this.framewinfo.frameinfo_wat_4 = this.jsondata.FrameInfo_WAT_4
    });
  }

  
}
