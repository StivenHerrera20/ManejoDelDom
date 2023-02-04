//Estilos automaticos

const lacapa = document.querySelector("#miCapa");
lacapa.innerText = "este es un texto";

//css dinamico

//lacapa.style = "background-color: peru; color: white; border-style: solid";

lacapa.setAttribute(
  "style",
  "background-color: black;color: white;border: 2px solid blue;"
);
