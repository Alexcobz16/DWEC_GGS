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
    let errores;
    let mostrar = false;
    if(!validarRegExp(email, regexp)){
        errores += "El email debe tener @ y . para ser válido. ";
        mostrar = true;
    }else if(email.checkValidity()){
        errores += validar(email);
        mostrar = true;
    }else{
        mostrar = false;
    }

    if(mostrar){
        document.getElementById("errEmail").textContent = errores;
    }else{
        document.getElementById("errEmail").textContent = "";
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
    if(nombre.checkValidity()){
        errores += validar(nombre);
        document.getElementById("errEdad").textContent = errores;
    }else{
        document.getElementById("errEdad").textContent = "";
    }
}

function validarRegExp(input, regexp){
    return regexp.test(input.value);
}

function validar(input){
    if(input.validity.patternMismatch){

    }
}