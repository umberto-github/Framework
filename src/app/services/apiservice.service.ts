// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataItemAlarms } from '../structures/alarms';
import { DataItemAnomalies } from '../structures/anomalies';
import { DataItemOperators } from '../structures/operators';
import { DataItemLogin } from '../structures/login';

@Injectable({
  providedIn: 'root'
})

//QUESTO SERVIZIO CONTIENE LE CHIAMATE ALLA WEBAPI
//E RESTITUISCE I DATI AI COMPONENTI CHE LO INVOCANO
export class ApiService {

  //private baseUrl = 'https://localhost:7016/api'; // Sostituisci con l'URL effettivo della tua Web API


  constructor(private http: HttpClient) { }

  getAlarms(url: string): Observable<DataItemAlarms[]> {
    //const url = `${this.baseUrl} + /frwrightmenu/alarms`; 

    //const url = `${this.baseUrl}` + this.alarmsUrl; 
    try {
      return this.http.get<DataItemAlarms[]>(url);
    } catch (error) {
      throw error; // Gestisci l'errore come preferisci
    }
  }


  getAnomalies(url: string): Observable<DataItemAnomalies[]> {
    //const url = `${this.baseUrl}/frwrightmenu/anomalies`; 
    //const url = `${this.baseUrl}` + this.anomaliesUrl; 
    try {
      return this.http.get<DataItemAnomalies[]>(url);
    } catch (error) {
      throw error; // Gestisci l'errore come preferisci
    }

  }

  getOperators(url: string): Observable<DataItemOperators[]> {
    //const url = `${this.baseUrl}/operator/operinfo`; 
    //const url = `${this.baseUrl}` + this.operatorsUrl; 
    try {
      return this.http.get<DataItemOperators[]>(url);
    } catch (error) {
      throw error; // Gestisci l'errore come preferisci
    }
  }


  loginCheck(url: string, username:string, password:string): Observable<DataItemLogin> {
    try {

      const body = { username, password };

      return this.http.post<DataItemLogin>(url, body);
    } catch (error) {
      throw error; // Gestisci l'errore come preferisci
    }
  }

  // Aggiungi altri metodi per effettuare altre richieste (POST, PUT, DELETE, ecc.) secondo le tue esigenze.
}
