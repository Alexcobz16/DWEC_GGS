        
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


// let tiempo;

// let id;

//     function crear() {
//         if(!id){
//             tiempo = prompt("¿Cada cuanto tiempo quieres que se realice el intervalo?");
//             if(isNaN(tiempo)){
//                 console.log("El tiempo no es un numero");
//             }else{
//                 id = setInterval(escribir, (tiempo*1000));
//             }
//         }else{
//             alert("Ya existe un intervalo");
//         }
//     }

//     function escribir(){
//         console.log("Este mensaje se imrpime cada " + tiempo + " segundos");
//     }

//     function eliminar(){
//         if(!id){
//             alert("No hay ningún intervalo");
//         }else{
//             clearInterval(id);
//             id = null;
//             }
//         }

// Coordenadas superior e izquierda de la ventana del navegador con respecto a la pantalla del
// equipo. Propiedades: screenX/screenLeft y screenY/screenTop.
//  La altura y anchura de la página. Propiedades: innerHeight/clientHeight e
// innerWidth/clientWidth.
//  La altura y anchura de la ventana del navegador. Propiedades: outerHeight y
// outerWidth.

// let anchuraCoord = screenX;
// let alturaCoord = screenY;
// let anchuraPag = innerWidth;
// let alturaPag = innerHeight;
// let anchuraVentana = outerWidth;
// let alturaVentana = outerHeight;

// console.log(anchuraCoord + " " + alturaCoord + " " + anchuraPag + " " + alturaPag + " " + anchuraVentana + " " + alturaVentana);

// let ventana;

// function crear(){
//     if(!ventana){
//         ventana = open("_blank", "_blank", "height=450", "width=600", "top=50", "left=50", "menubar=yes", "resizable=yes", "location=yes", "scrollbars=yes", "status=yes", "toolbar=yes");
//     }else{
//         console.log("Ya se ha desplegado una ventana");
//     }
// }

// function eliminar(){
//     if(ventana){
//         ventana.close();
//         ventana = null;
//     }else{
//         console.log("No hay ninguna ventana activa");
//     }
// }

// alert("A partir de ahora la navegación sera privada");

//  let confirmar = confirm("Acepta los terminos y condiciones");

// if(confirmar){
//     alert("Se han aceptado los terminos y condiciones");
// }else{
//     alert("No se han aceptado los terminos y condiciones");
// }

// let nombre = prompt("Introduce tu nombre", "Harry Potter");
// console.log("Hola " + nombre);

// Actividad 1. Propiedades de la pantalla.
// Implementa una aplicación que muestre la siguiente información sobre la pantalla del usuario:
//  El ancho y alto de la pantalla. Propiedades width y height.
//  El ancho y alto de la pantalla disponibles teniendo en cuenta los elementos de la interfaz
// como la barra de tareas del sistema operativo. Propiedades availWidth y
// availHeight.
//  La profundidad de color de la pantalla del usuario. Propiedad
// colorDepth/pixelDepth

// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);
// console.log(screen.availHeight);
// console.log(screen.pixelDepth);

// Actividad 1. Propiedades de la URL.
// Implementa una aplicación que muestre la siguiente información sobre la URL de la página:
//  La URL completa de la página. Propiedad href.
//  El nombre de dominio. Propiedad hostname.
//  La ruta y el nombre del fichero de la página. Propiedad pathname.
//  El protocolo de comunicación utilizado. Propiedad protocol.

// console.log(location.href);
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.protocol);

// Implementa una aplicación que muestre la siguiente información sobre el navegador del usuario:
//  El valor de la cabecera HTTP user-agent enviada por el navegador al servidor. Propiedad
// userAgent.
//  Si las cookies están habilitadas o no. Propiedad cookieEnabled.
//  El sistema operativo sobre el que corre el navegador. Propiedad platform.
//  El lenguaje del navegador. Propiedad language.

