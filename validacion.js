const formulario = Contacto.forms.formulario;
let error = '';

const validarConsulta = () => {
    const consulta = formulacio.consulta.value;
    if (consulta.lenght < 6) {
        error += 'Debe ingresar al menos 6 caracteres en el campo Consulta \n'
} }

const validar = (e) => {
    e.preventDefault ();
    validarConsulta ();
    (error) ?
    alert ('Ocurrieron los siguientes errores: \n' + error)
    :
    alert ('Formulario enviado con exito!\n Opcion seleccionada: '+ formulario.opcion.value + '\n')
    error = '';
    formulario.reset ();
}

formulario.addEventListener ("sumbit",validar);
