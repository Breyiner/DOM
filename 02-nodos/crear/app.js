let padre = document.querySelector(".container");
let nodo = document.createElement("h2");
nodo.textContent = "Titulo de segundo nivel";

let texto = document.createTextNode("Palabra para el nodo de texto")
padre.appendChild(nodo);
padre.appendChild(texto);

let lista = document.querySelector("#list");

const lenguajes = ["HTML", "CSS", "JS"];

lenguajes.forEach(lenguaje => {
  let elemento = document.createElement("li");
  elemento.classList.add("item");
  elemento.textContent = lenguaje;
  lista.append(elemento);
});

// let card = document.querySelector(".card");
let lista_card = document.querySelector("#list");
// let titulo = document.createElement("h2");
// titulo.textContent = "Titulo de la card";
// // card.append(titulo);
// card.insertBefore(titulo, lista_card);


let beforeBegin = document.createElement("li");
beforeBegin.classList.add("item", "before");
beforeBegin.textContent = "Nuevo contenido ubicado antes de la lista desordenada";

let afterBegin = document.createElement("li");
afterBegin.classList.add("item");
afterBegin.textContent = "Nuevo contenido ubicado al inicio de la lista desordenada";

let beforeEnd = document.createElement("li");
beforeEnd.classList.add("item");
beforeEnd.textContent = "Nuevo contenido ubicado al final de la lista desordenada";

let afterEnd = document.createElement("li");
afterEnd.classList.add("item", "before");
afterEnd.textContent = "Nuevo contenido ubicado luego de la lista desordenada";


lista_card.insertAdjacentElement("beforebegin", beforeBegin);
lista_card.insertAdjacentElement("beforeEnd", beforeEnd);
lista_card.insertAdjacentElement("afterbegin", afterBegin);
lista_card.insertAdjacentElement("afterEnd", afterEnd);

// Los dias de la semana son:

let dia = document.querySelector("#dias");

const dias = [
  {
    id: 1,
    nombre: "Lunes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde!"
  },
  {
    id: 2,
    nombre: "Martes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde!"
  },
  {
    id: 3,
    nombre: "Miercoles",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde!"
  },
  {
    id: 4,
    nombre: "Jueves",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde!"
  },
  {
    id: 5,
    nombre: "Viernes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde!"
  },
  {
    id: 6,
    nombre: "Sábado",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde!"
  },
  {
    id: 7,
    nombre: "Domingo",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde!"
  }
];

dias.map(({id, nombre, img, parrafo}) => {
  let card = document.createElement("div");
  card.classList.add("card");

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card__header");
  card.append(cardHeader);

  let cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = nombre;
  cardHeader.append(cardTitle);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card__body");
  card.append(cardBody);

  let cardImg = document.createElement("img");
  cardImg.classList.add("card__img");
  // cardImg.src = img;
  // cardImg.alt = "Img";
  cardImg.setAttribute("src", img);
  cardImg.setAttribute("alt", "Img");
  cardBody.append(cardImg);

  let cardParrafo = document.createElement("p");
  cardParrafo.classList.add("card__paragraph");
  cardParrafo.textContent = parrafo;
  cardBody.append(cardParrafo);

  dia.append(card);
});