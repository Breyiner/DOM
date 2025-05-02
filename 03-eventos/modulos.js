const agregarAdvertencia = campo => {
  campo.classList.add("border-red");
  if (campo.nextElementSibling) campo.nextElementSibling.remove();
  
  let advertencia = document.createElement("span");
  advertencia.textContent = `El campo es obligatorio.`;
  advertencia.classList.add("advertencia");
  campo.insertAdjacentElement("afterEnd", advertencia);
};

const removerAdvertencia = campo => {
  campo.classList.remove("border-red");
  let advertencia = document.querySelector(".advertencia");
  advertencia.remove();
}

const crearTabla = () => {
  let carta = document.querySelector('.card');
  
  let tablaDatos = document.createElement("table");
  let fila = document.createElement("tr");
  let cabecera = document.createElement("th");
  
  tablaDatos.appendChild(fila);
  cabecera.textContent = "Hola";
  fila.append(cabecera);
  carta.parentElement.parentElement.insertAdjacentElement('afterend', tablaDatos);
}

export const validar = event => {
  event.preventDefault();
  const campos = [...event.target].filter(elemento => {
    if (elemento.hasAttribute('required')) {
      return elemento;
    }
  });
  
  const datos = {};
  campos.forEach(campo => {
    switch (campo.tagName) {
      case 'INPUT':
        if (campo.value.trim() == "") {
          agregarAdvertencia(campo);
          datos[campo.name] = campo.value;
        }
        break;
        
      case 'SELECT':
        if (campo.selectedIndex === 0) {
          agregarAdvertencia(campo);
          datos[campo.name] = "";
        }
        else datos[campo.name] = campo.selectedIndex
          ;
        break;

      default:
        break;
    }
  });


  let radios = [...campos].filter(elemento => {
    if (elemento.type == "radio") {
      return elemento;
    }
  });
  

  let checkeado = radios.find(radio => radio.checked) || [];

  if (checkeado.length === 0) datos[radios[0].name] = "";
  else datos[checkeado.name] = checkeado.value;


  let checkbox = [...campos].filter(checkbox => {
    if (checkbox.type == "checkbox") return checkbox;
  });

  
  let campos_checkbox = [...checkbox].filter(checkbox => checkbox.checked);

  let elemento = document.querySelector('.form__lenguajes');
  let cantidadLenguajes = elemento.dataset.lenguajes;


  if (campos_checkbox.length < cantidadLenguajes) datos[checkbox[0].name] = "";
  else datos[checkbox[0].name] = [...campos_checkbox].map(elemento => elemento.value);

  console.log(datos);
  
};



export const validarPalabras = event => {
  if (!/[a-zñáéíóú\s]/i.test(event.key) || event.target.value.length >= 10 && event.key != "Backspace") {
    event.preventDefault();
  }
};

export const validarNumeros = event => {
  if (!/[0-9]/.test(event.key) && event.key != "Backspace") {
    event.preventDefault();
  }
};

export const validarContrasena = event => {
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

export const validarCampo = event => {
  let campo = event.target;
  if (campo.value.trim() != "" && campo.className == "border-red" ) removerAdvertencia(campo);
  // if (campo.tagName == "SELECT" && campo.selectedIndex != 0 && campo.className == "border-red" ) removerAdvertencia(campo);
}