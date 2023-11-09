//-------CLASSE PER LA GESTIONE DELLA CHIAMATA ALLA WEB API DI LOGIN-----------
class WebApiCaller {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async getDati() {
    try {
      const response = await fetch(`${this.apiUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Puoi aggiungere altri header se necessario, come l'autorizzazione
        },
      });

      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Errore:', error);
      throw error;
    }
  }

  // Puoi definire altri metodi per chiamate POST, PUT, ecc., se necessario
}


//--------------------LOGIN--------------------
function clickLogin() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  const apiCaller = new WebApiCaller(apiUrl);

  apiCaller.getDati()
    .then(data => {


      //console.log(data.body);
      console.log(data.title);

      var login = document.getElementById('fr_login');
      var modal = document.getElementById("btnlogin_close");

      //simulazione login OK
      if (data.title == 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit') {
        login.style.color = '#0000F9';   //colore blu
        login.style.fontWeight = "bold"; //grassetto



        const app_sendrecipe = document.getElementsByTagName('app-sendrecipe');
        if (isNotEmpty(app_sendrecipe)) {
          console.log("ho trovato l'istanza");
          const angularComponentInstance = ng.getComponent(app_sendrecipe);

          // Invia il messaggio
          ngularComponentInstance.loginCheck('Questo è un messaggio da JavaScript esterno!');


        }


        //chiudo la finestra di login
        modal.click();
      }
      else {
        //simulazione login NOK
        login.style.color = '#000000';  //colore nero
        modal.click();
      }



    })
    .catch(error => {
      // Gestisci gli errori qui
    });
}



//-------------LOGOUT------------------
function clickLogout() {
  var login = document.getElementById('fr_login');
  login.style.color = '#000000';  //colore nero
  login.style.backgroundColor = "#F2F2F2";
}


function isNotEmpty(variable) {
  return variable !== undefined && variable !== null && variable !== '';
}