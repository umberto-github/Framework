/*Caricamento della pagina web*/
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("scroll-to-top-button");
    button.style.display = "none";
  });
  


//jquery
$(document).ready(function () {

    // Ottieni l'indice dell'ultimo tab selezionato dal localStorage
    var lastTab = localStorage.getItem("lastTab");
    if (lastTab !== null) {
        $(".tab").eq(lastTab).addClass("active");
    }

    // Gestisci il click su un tab
    $(".tabs").click(function() {
        var tabIndex = $(this).index();
        localStorage.setItem("lastTab", tabIndex);
        //aggiorna gli allarmi e i warning, la 
        //funzione si trova in alarm_warning.js
        updateMsg();
    });
});


