document.forms[0]["email"].addEventListener("blur", email, false);

function email(){
    if(!document.forms[0]["email"].checkValidity()){
        
        comprobarErrores();

        document.forms[0]["email"].className = "invalid";
        document.getElementById("errEmail").textContent = "Hay errores crack";
        inhabilitar();
    }else{
        document.forms[0]["email"].className = "required";
        document.getElementById("errEmail").textContent = "";
        habilitar();

    }
}

function comprobarErrores(){
    
}

function inhabilitar(){
    document.forms[0]["enviar"].disabled = true;
}

function habilitar(){
    document.forms[0]["enviar"].disabled = false;
}