
/*MESSAGGI TOAST PER ALLARMI E WARNING*/

//leggi l'url dal file di configurazione config.json
async function ReadFromJSON(url, campoBase, campoDaLeggere) {
  try {
    // Esegui una richiesta GET per ottenere il file JSON dalla URL
    const response = await fetch(url);

    // Verifica se la risposta è valida (HTTP 200 OK)
    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }

    // Parsa il file JSON dalla risposta
    const oggettoJSON = await response.json();

    // Verifica se il campo specificato esiste nell'oggetto JSON
    if (oggettoJSON.hasOwnProperty(campoDaLeggere)) {
      // Restituisci il valore del campo come stringa
      return String(oggettoJSON[campoBase] + oggettoJSON[campoDaLeggere]);
    } else {
      throw new Error("Il campo specificato non esiste nel file JSON.");
    }
  } catch (errore) {
    console.error("Errore durante la lettura del campo JSON:", errore.message);
    return null; // Restituisce null in caso di errore
  }
}

function AjaxCall(in_name, in_url) {
  //componi l'url per la richiesta webapi
  let apiUrl = in_url + in_name;

  // Esegui una richiesta GET alla Web API utilizzando fetch
  fetch(apiUrl)
    .then((response) => {
      // Verifica se la risposta è valida (HTTP 200 OK)
      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }
      // Parsa la risposta JSON
      return response.json();
    })
    .then((data) => {
      // Utilizza i dati ottenuti dalla Web API
      //console.log('Dati dalla Web API:', data);

      data.forEach(function (dato) {

        if (in_name === "alarms")
          // La funzione viene chiamata per ciascun elemento
          toastr.error(dato.description);

        if (in_name === "anomalies")
          // La funzione viene chiamata per ciascun elemento
          toastr.warning(dato.description);

      });

    })
    .catch((error) => {
      // Gestisci gli errori, ad esempio stampali in console
      console.error('Errore durante la richiesta AJAX:', error);
    });

  //-----------------------------------------------------


}

//aggiorna gli allarmi e i warning
function updateMsg() {
  // Invoca il click del pulsante dopo 2 secondi
  setTimeout(function () {
    $("#btnToastWarning").click();
  }, 2000);

  setTimeout(function () {
    $("#btnToastAlarm").click();
  }, 2000);
}

$(document).ready(function () {

  updateMsg();

  const urlJSON = 'assets/config.json'
  const campoBase = 'WebApiBaseUrl'
  const campoRichiesto = 'WebApi_js_alarms_anomalies';

  //leggi l'url per la richiesta webapi (ultimi 5 allarmi e  ultime 5 anomalie) dal file config.json
  ReadFromJSON(urlJSON, campoBase, campoRichiesto)
  .then(valoreCampo => {
    if (valoreCampo !== null) {
      /*--------------------Warning = Anomalie-------------------*/

      /*gestione warning=Anomalie tramite toast message*/
      $(".toastrDefaultWarning").click(function () {
        //richiedi alla webapi le ultime 5 anomalie
        AjaxCall("anomalies", valoreCampo);
      });

      /*----------------Allarmi----------------------*/

      /*gestione allarmi tramite toast message*/
      $(".toastrDefaultError").click(function () {
        //richiedi alla webapi gli ultimi 5 allarmi
        setTimeout(function () {
          AjaxCall("alarms", valoreCampo);
        }, 1000);


      });
    } else {
      console.log(`Il campo "${campoRichiesto}" non è stato trovato o si è verificato un errore.`);
    }
  })
  .catch(errore => {
    console.error("Errore generale:", errore);
  });

});



