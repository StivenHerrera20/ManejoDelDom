//Pagina 9 del documento soporte

//Creando una capa
const lacapa = document.createElement("div");
//innertext es texto plano, innerHTML es html puro
//lacapa.innerText = "lorem sodoasido";
lacapa.innerHTML = "<h1>Titulo</h1>";
const laImagen = document.createElement("img");
const elParrafo = document.createElement("p");
elParrafo.innerHTML = "Este es el texto del parrafo";
laImagen.src = "./peakpx.jpg";
//Agregamos la imagen a su nodo contenedor o nodo superior (laCapa)
lacapa.appendChild(elParrafo);
lacapa.appendChild(laImagen);

//lo agregamos al nodo superior (Body)
document.body.appendChild(lacapa);
