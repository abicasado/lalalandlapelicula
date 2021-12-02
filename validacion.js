var formulario = document.getElementById('formulario');

window.onload = iniciar;

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);}

function valida_Mail() {
  var elemento = document.getElementById('Mail');
  if (elemento.value =='') {
    alert("El campo debe contener un mail");
    return FontFaceSetLoadEvent;
  } 
  return true;
}

function valida_Consulta() {
  var elemento = document.getElementById('tel');
  if (consulta.lenght < 6){
    alert('El campo debe contener al menos 6 letras');
    return false;
  }
  return true;
}

function valida_fecha() {
  var dia = document.getElementById('dia').value;
  var mes = document.getElementById('mes').value;
  var agno = document.getElementById('agno').value;

  var fecha = new Date(agno, mes, dia);
  if (isNaN(fecha)) {
    alert("Los campos de la fecha son incorrectos");
    return false;
  }
  return true;
}

function valida_check() {
 var campo_check = document.getElementById('mayor');
  if(!campo_check.checked){
    alert('Debe ser mayor de edad');
    return false;
  }
  return true;
}

function validate(e){
  if (valida_Mail()&&valida_Consulta()&&confirm('Pulse aceptar si desea enviar el formulario')){
    return true;
  } else {
     e.preventDefault();
    return false;
  }
}
