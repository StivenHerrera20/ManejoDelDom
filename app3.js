const texto = document.createTextNode("La casa de campo era amarrilla");
//Algunos metodos del nodo texto

//split text
/* let porcionTexto = texto.splitText(7);
console.log(porcionTexto); */

//Agrega texto
texto.appendData(", rodeada de un rio azul");
console.log(texto);

//inserta texto en cierta posicion
texto.insertData(3, "fea y destartalada ");

//Remplaza el texto en el rango de posicion que indique (posInicial, posFinal, Texto)
texto.replaceData(3, 18, "linda, pero destartalada");

//extrae el texto que este en el rango asignado
console.log(texto.substringData(3, 24));

document.body.appendChild(texto);
