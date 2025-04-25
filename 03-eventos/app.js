//Importaciones
import { validar, validarCampo, validarNumeros, validarPalabras } from "./modulos.js";

// Variables
const formulario = document.querySelector("form");
let nombre = document.querySelector('[name = "nombre"]');
let apellido = document.querySelector('[name = "apellido"]');
let telefono = document.querySelector('[name = "telefono"]');
let documento = document.querySelector('[name = "documento"]');
let usuario = document.querySelector('[name = "usuario"]');
let contrasena = document.querySelector('[name = "contrasena"]');
let politicas = document.querySelector('#politicas');
let boton = document.querySelector("#btn_validar");

// const datos = [nombre, apellido, telefono, documento, usuario, contrasena];

// Funciones
const habilitarBoton = () => {
  if (!politicas.checked) boton.setAttribute('disabled', '');
  else boton.removeAttribute('disabled');
}

// Eventos
addEventListener("DOMContentLoaded", habilitarBoton);

politicas.addEventListener("change", habilitarBoton);

formulario.addEventListener('submit', validar);

nombre.addEventListener('keydown', validarPalabras);
apellido.addEventListener('keydown', validarPalabras);
telefono.addEventListener('keydown', validarNumeros);
documento.addEventListener('keydown', validarNumeros);

nombre.addEventListener('blur', validarCampo);
apellido.addEventListener('blur', validarCampo);
telefono.addEventListener('blur', validarCampo);
documento.addEventListener('blur', validarCampo);
usuario.addEventListener('blur', validarCampo);
contrasena.addEventListener('blur', validarCampo);