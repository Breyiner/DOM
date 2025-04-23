//Importaciones
// Variables
const formulario = document.querySelector("form");
let nombre = document.querySelector('[name = "nombre"]');
let apellido = document.querySelector('[name = "apellido"]');
let telefono = document.querySelector('[name = "telefono"]');
let documento = document.querySelector('[name = "documento"]');
let usuario = document.querySelector('[name = "usuario"]');
let contrasena = document.querySelector('[name = "contrasena"]');
// let btn = document.querySelector("#btn_validar");

// Funciones
const validar = (event) => {
  event.preventDefault();

  if (nombre.value.trim() == "") {
    alert("Llene el campo nombre");
    nombre.focus();
  }
};
// Eventos
formulario.addEventListener('submit', validar);