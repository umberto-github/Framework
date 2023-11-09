import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {
    this.http.get('../../assets/config.json').subscribe((data) => {
      this.jsondata = data;
      this.baseUrl = this.jsondata.WebApiBaseUrl
      this.alarmsUrl = this.jsondata.WebApiAlarms
      this.anomaliesUrl = this.jsondata.WebApiAnomalies
      this.operatorsUrl = this.jsondata.WebApiOperators
      this.logincheckUrl = this.jsondata.WebApiLogin
    });
  }

  
}
