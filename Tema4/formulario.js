

function validarRegExp(input, regexp){
    return regexp.test(input.value);
}

function validar(input){
    let error = "";
    if(input.validity.valueMissing) {
        error += "Este campo no puede estar vacío.";
    }
    if(input.validity.typeMismatch) {
        error += "Los datos suministrados no tienen el formato correcto";
    }
    if(input.validity.rangeUnderflow || input.validity.rangeOverflow) {
        error += "Debe contener un valor entre " + input.min + " y " + input.max;
    }
    if(input.validity.patternMismatch) {
        error += "El campo debe contener al menos un número";
    }
    return error;
}