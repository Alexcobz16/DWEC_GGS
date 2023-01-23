document.getElementById("enviar").addEventListener("click", comprobar, false);

function comprobar(){
    let email = document.getElementsByClassName("required")[0];
    let psswd = document.getElementsByClassName("required")[1];
    
    if(email.value == ""){
        email.className("invalid");
    }
    if(psswd.value == ""){
        psswd.value = "Falta por rellenar";
        
    }
}