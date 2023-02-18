const error = "Err";

document.getElementById("email").addEventListener("blur", validarElemento, false);

function validarElemento(e) {
    const input = e.target;
    if(input.name == "email"){
        validarEmail(input);
    }else if(input.name == "psswd"){
        validarPsswd(input);
    }else if(input.name == "nombre"){
        validarNombre(input);
    }else if(input.name == "edad"){
        validarEdad(input);
    }
}

function validarEmail(email){

    const regexp = new RegExp("[A-Z a-z ñ Ñ 0-9]*@[A-Z a-z ñ Ñ 0-9]*\.[A-Z a-z ñ Ñ 0-9]{0,5}");
    let errores = "";
    let mostrar = false;

    if(!validarRegExp(email, regexp) || email.checkValidity()){
        if(!validarRegExp(email, regexp)){
            errores += "El email debe tener @ y . para ser válido. ";
            mostrar = true;    
        }
        if(email.checkValidity()){
            errores += validar(email);
            mostrar = true;    
        }
    }else{
        mostrar = false;
    }
    
    if(mostrar){
        document.getElementById("errEmail").textContent = errores;
    }else{
        document.getElementById("errEmail").textContent = "";
        errores = "";
    }
}

function validarPsswd(psswd){
    if(psswd.checkValidity()){
        errores += validar(psswd);
        document.getElementById("errPsswd").textContent = errores;
    }else{
        document.getElementById("errPsswd").textContent = "";
    }
}

function validarNombre(nombre){
    if(nombre.checkValidity()){
        errores += validar(nombre);
        document.getElementById("errNombre").textContent = errores;
    }else{
        document.getElementById("errNombre").textContent = "";
    }
}

function validarEdad(edad){
    if(edad.checkValidity()){
        errores += validar(edad);
        document.getElementById("errEdad").textContent = errores;
    }else{
        document.getElementById("errEdad").textContent = "";
    }
}

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