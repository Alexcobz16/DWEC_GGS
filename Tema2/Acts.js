        
        // const tiempo = 10000;

        // let id;
        
        // function crear(){
        //     if(!id){
        //         id = setTimeout(alertaEjecucionTemp, tiempo);
        //     }else{
        //         alert("Ya existe un temporizador");
        //     }
        // }
        
        // function eliminar(){
        //  if(!id){
        //     alert("No hay ningún temporizador");
        //  }else{
        //     clearTimeout(id);
        //     id = null;
        //  }
        
        // }
        
        // function alertaEjecucionTemp(){
        //     alert("Alerta fin de temporizador");
        // }


let tiempo;

let id;

    function crear() {
        if(!id){
            tiempo = prompt("¿Cada cuanto tiempo quieres que se realice el intervalo?");
            if(isNaN(tiempo)){
                console.log("El tiempo no es un numero");
            }else{
                id = setInterval(escribir, (tiempo*1000));
            }
        }else{
            alert("Ya existe un intervalo");
        }
    }

    function escribir(){
        console.log("Este mensaje se imrpime cada " + tiempo + " segundos");
    }

    function eliminar(){
        if(!id){
            alert("No hay ningún intervalo");
        }else{
            clearInterval(id);
            id = null;
            }
        }