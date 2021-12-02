var formulario = document.forms['un_formulario'];

window.onload = iniciar; 

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false); // el evento se dispara fase de captura o fase de propagacion
}

function valida_nombre() {
  var elemento = document.getElementById('nombre');
  if (elemento.value == '') {
    alert("El campo nombre no puede ser vacío");
    return FontFaceSetLoadEvent;
  } 
  return true;
}

function valida_telefono() {
  var elemento = document.getElementById('tel');
  if (isNaN(elemento.value)){
    alert('El campo teléfono debe ser numérico');
    return false;
  }
  return true;
}

function valida_texto() {
    var elemento = document.getElementById('texto');
    if (elemento.lenght < 10) {
      alert("El campo nombre no puede tener menos de 10 caracteres");
      return FontFaceSetLoadEvent;
    } 
    return true;
  }
  
function validate(e){
  if (valida_nombre()&&valida_telefono()&&valida_texto()&&confirm('Pulse aceptar si desea enviar el formulario')){
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}
