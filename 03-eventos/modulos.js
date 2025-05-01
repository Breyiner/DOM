export const agregarAdvertencia = campo => {
  campo.classList.add("border-red");
  if (campo.nextElementSibling) campo.nextElementSibling.remove();
  
  let advertencia = document.createElement("span");
  advertencia.textContent = `El campo es obligatorio.`;
  advertencia.classList.add("advertencia");
  campo.insertAdjacentElement("afterEnd", advertencia);
};

export const removerAdvertencia = campo => {
  campo.classList.remove("border-red");
  let advertencia = document.querySelector(".advertencia");
  advertencia.remove();
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
        // console.log(campo.type);
        break;
    
      case 'SELECT':
        // console.log(campo.type);
        break;
      
      default:
        break;
    }

    let nombreCampo = campo.getAttribute('name');

    if (campo.value.trim() == "" || campo.selectedIndex == 0) agregarAdvertencia(campo);
  
    else if (campo.className == "border-red") {
      removerAdvertencia(campo);
    }
    
    else datos[nombreCampo] = campo.value;
  });

  if(Object.keys(datos).length > 0) console.log(datos);
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