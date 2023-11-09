// Mostra o nascondi il pulsante quando si scorre la pagina
window.addEventListener("scroll", function () {
  var button = document.getElementById("scroll-to-top-button");
  if (window.pageYOffset > 100) {
    // Puoi personalizzare l'offset a cui il pulsante diventa visibile
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// Scorri verso l'alto quando si fa clic sul pulsante
document.getElementById("scroll-to-top-button").addEventListener("click", function (event) {
    event.preventDefault();
    // Scorri verso l'alto in modo fluido (animato)
   window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });


