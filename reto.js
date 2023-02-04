//Creando una capa
const lacapa = document.createElement("div");
lacapa.innerHTML = "<h1>Lista</h1>";

//Creo el ul
const ul = document.createElement("ul");
//Creo los li
const l1 = document.createElement("li");
const l2 = document.createElement("li");
const l3 = document.createElement("li");
const l4 = document.createElement("li");
const l5 = document.createElement("li");

//Les agrego texto a los li
l1.innerHTML = "Banano";
l2.innerHTML = "Mango";
l3.innerHTML = "Piña";
l4.innerHTML = "Mandarina";
l5.innerHTML = "Papaya";

//agrego la capa
lacapa.appendChild(ul);
//Agrego los "li" a el "ul"
ul.appendChild(l1);
ul.appendChild(l2);
ul.appendChild(l3);
ul.appendChild(l4);
ul.appendChild(l5);

document.body.appendChild(lacapa);
