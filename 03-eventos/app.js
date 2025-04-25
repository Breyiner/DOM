//Importaciones
// Variables
const formulario = document.querySelector("form");
let nombre = document.querySelector('[name = "nombre"]');
let apellido = document.querySelector('[name = "apellido"]');
let telefono = document.querySelector('[name = "telefono"]');
let documento = document.querySelector('[name = "documento"]');
let usuario = document.querySelector('[name = "usuario"]');
let contrasena = document.querySelector('[name = "contrasena"]');
const datos = [nombre, apellido, telefono, documento, usuario, contrasena];
// let btn = document.querySelector("#btn_validar");

// Funciones
const validar = event => {
  let valido = false;
  datos.forEach(dato => {
    if (dato.value.trim() == "") valido = true;
  });

  if (valido) {
    alert("Llene todos los campos");
    event.preventDefault();
  }
};

const validarPalabras = event => {
  if (!/[a-zñáéíóú\s]/i.test(event.key)) {
    event.preventDefault();
  }
};

const validarNumeros = event => {
  if (!/[0-9]/.test(event.key) && event.key != "Backspace") {
    event.preventDefault();
  }
};

const validarContrasena = event => {
  if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(contrasena.value)){
    alert("Contraseña Inválida!\n\n" +
      "La contraseña debería cumplir con:\n" +
      "- 1 Mayúscula\n" +
      "- 1 Caracter especial\n" +
      "- 1 número\n" +
      "- Mínimo 8 carcteres"
    );
    console.log(contrasena.value);
    
    event.preventDefault();
  }
};
// Eventos
formulario.addEventListener('submit', validar);
formulario.addEventListener('submit', validarContrasena);

nombre.addEventListener('keydown', validarPalabras);
apellido.addEventListener('keydown', validarPalabras);
telefono.addEventListener('keydown', validarNumeros);
documento.addEventListener('keydown', validarNumeros);