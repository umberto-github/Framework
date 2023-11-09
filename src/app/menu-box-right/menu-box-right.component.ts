import { JsonconfigService } from './../services/jsonconfig.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiservice.service';
import { DataItemAlarms } from '../structures/alarms';
import { DataItemAnomalies } from '../structures/anomalies';
import { DataItemOperators } from '../structures/operators';


@Component({
  selector: 'app-menu-box-right',
  templateUrl: './menu-box-right.component.html',
  styleUrls: ['./menu-box-right.component.css']
})
export class MenuBoxRightComponent implements OnInit {
  totalmsg: number = 0
  totaloperators: number = 0
  alarms: DataItemAlarms[] = []
  anomalies: DataItemAnomalies[] = []
  operators: DataItemOperators[] = []


  constructor(private apiService: ApiService, private jsonConfigService: JsonconfigService) { }

  ngOnInit(): void {
    //QUESTO RITARDO E' FONDAMENTALE ALTRIMENTI updateMsg() viene eseguito prima che jsonConfiService estrae i dati
    //di conseguenza i dati del file config.json non vengono passati alle chiamate webApi

    setTimeout(() => {
      // Chiamare il tuo metodo qui
      this.updateMsg();
    }, 1000); // 1000 millisecondi = 1 secondo
  }

  //aggiorna i messaggia di allarme ogni 10 sec.
  startTimer() {
    setTimeout(() => {
      // Chiamare il tuo metodo qui
      this.updateMsg();
    }, 10000); // 10000 millisecondi = 10 secondi
  }

  //esegue le chiamate alla webapi per l'aggiornamento allarmi e anomalie e operatori
  updateMsg() {

    let url = this.jsonConfigService.baseUrl + this.jsonConfigService.alarmsUrl;

    //richiesta dati allarmi dalla web api
    try {
      this.apiService.getAlarms(url).subscribe((responce) => {
        if (Array.isArray(responce) && responce.length > 0) {
          this.alarms = responce;
          this.totalmsg = this.alarms.length
        } else {
          console.error('Dati degli allarmi non validi o vuoti');
        }
      });
    } catch (error) {
      console.error('Si è verificato un errore sulla richiesta getAlarms(url):', error);
    }

    url = this.jsonConfigService.baseUrl + this.jsonConfigService.anomaliesUrl;

    //ricezione dati delle anomalie dalla webapi

    try {
      this.apiService.getAnomalies(url).subscribe((responce) => {
        if (Array.isArray(responce) && responce.length > 0) {
          this.anomalies = responce;
          this.totalmsg = this.totalmsg + this.anomalies.length
        } else {
          console.error('Dati di Anomalie non validi o vuoti');
        }
      });
    } catch (error) {
      console.error('Si è verificato un errore sulla richiesta getAnomalies(url):', error);
    }

    url = this.jsonConfigService.baseUrl + this.jsonConfigService.operatorsUrl;

    //ricezione degli Operatori dalla WebApi
    try {
      this.apiService.getOperators(url).subscribe((responce) => {
        if (Array.isArray(responce) && responce.length > 0) {
          this.operators = responce;
          this.totaloperators = this.operators.length
        } else {
          console.error('Dati degli operatori non validi o vuoti');
        }
      });
    } catch (error) {
      console.error('Si è verificato un errore sulla richiesta getOperators(url):', error);
    }
  }

}

