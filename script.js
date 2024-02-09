document.addEventListener("DOMContentLoaded", function() {
  // Array de versículos
  var versiculos = [
    "Versículo 1",
    "Versículo 2",
    "Versículo 3",
    // Agrega más versículos según desees
  ];

  // Obtiene el día actual como un número de 1 a 365
  var fecha = new Date();
  var dia = fecha.getDate();

  // Obtiene el versículo del almacenamiento local
  var storedVerse = localStorage.getItem("dailyVerse");

  // Verifica si ya hay un versículo almacenado para hoy
  if (storedVerse) {
    document.getElementById("verseText").textContent = storedVerse;
  } else {
    // Calcula el índice del versículo basado en el día actual
    var indiceVersiculo = dia % versiculos.length;

    // Obtiene el versículo correspondiente al día actual
    var verseOfTheDay = versiculos[indiceVersiculo];

    // Almacena el versículo en el almacenamiento local
    localStorage.setItem("dailyVerse", verseOfTheDay);

    // Muestra el versículo en la página
    document.getElementById("verseText").textContent = verseOfTheDay;
  }
});
