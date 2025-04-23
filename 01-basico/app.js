let win = window;
let dom = document;

let parrafos = document.querySelectorAll('main p');
let imagenes = document.images;
let hojas = document.styleSheets;
let scripts = document.scripts;

// console.log(imagenes);
// console.log(hojas);
// console.log(scripts);

let lista = document.querySelectorAll('ul.list > li.item');

// console.log(lista);

let cards = document.querySelectorAll('div.cards > .card');
console.log(cards);

console.clear();

let elementos = document.querySelector("#elementos2");
elementos.textContent = "Nuevo texto";
elementos.innerHTML = "<p> text </p> <p> texto 2 </p>";

let body = document.querySelector("body");

setTimeout(() => {
  body.classList.add("bg-red");
  
}, 6000);

console.log(body);
