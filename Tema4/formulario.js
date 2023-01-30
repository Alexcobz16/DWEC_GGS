document.forms[0]["email"].addEventListener("blur", email, false);

function email(){
    if(!document.forms[0]["email"].checkValidity()){
        document.forms[0]["email"].className = "invalid";
        document.getElementById("errEmail").textContent = comprobarErrores(document.forms[0]["email"]);
        inhabilitar();
    }else{
        document.forms[0]["email"].className = "required";
        document.getElementById("errEmail").textContent = "";
        habilitar();

    }
}

function comprobarErrores(input){
    let error = "";

    if(input.validity.valueMissing) {
        error += "Este campo no puede estar vacío."
    }
    // El contenido del campo no es el que especifica el tipo de campo
    if(input.validity.typeMismatch) {
        error += "Los datos suministrados no tienen el formato correcto";
    }
    // El rango de valores no está entre los especificados
    if(input.validity.rangeUnderflow || input.validity.rangeOverflow) {
        error += `Debe contener un valor entre ${input.min} y ${input.max}`;
    }
    // No se cumple el patrón definido en el campo
    if(input.validity.patternMismatch) {
        error += "El campo debe contener al menos un número";
    }

    return error;
}

function inhabilitar(){
    document.forms[0]["enviar"].disabled = true;
}

function habilitar(){
    document.forms[0]["enviar"].disabled = false;
}