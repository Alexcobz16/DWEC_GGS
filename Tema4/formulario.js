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
    if(!validarRegExp(email, regexp)){
        console.log("da petazo");
    }else{
        console.log("va de lujazo");
    }
}

function validarPsswd(psswd){

}

function validarNombre(nombre){

}

function validarEdad(edad){

}

function validarRegExp(input, regexp){
    return regexp.test(input.value);
}