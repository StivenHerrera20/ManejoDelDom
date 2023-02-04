const capa = document.querySelector("#miCapa");
const imagen = document.querySelector("#laImagen");

/* console.log(capa);
console.log(imagen); */

//Obtiene en un arreglo los nombres de los atributos del element
console.log(capa.getAttributeNames());
console.log(imagen.getAttributeNames());

//otros usos

console.log(imagen.src);
console.log(imagen.srcset);

//Manipulando los atributos del element con el dom

const parrafo = document.querySelector("p");
//Le agregamos al parrafo un atributo id y le pasamos el valor parrafoEspecial (Nombre id)
parrafo.setAttribute("id", "parrafoEspecial");
parrafo.setAttribute("class", "claseParrafo");
console.log(parrafo.getAttributeNames());

//Estudio de otros atributos

//Muestra el alto de la imagen
console.log(imagen.clientHeight);
//Muestra el ancho de la imagen
console.log(imagen.clientWidth);
//Muestra el alto del borde de la imagen
console.log(imagen.clientTop);
//Muestra el ancho del borde de la imagen
console.log(imagen.clientLeft);
