// function filter(array, callback) {
//     let res = [];
//     for(i=0;i<array.length;i++){
//         if(callback(array[i])){
//             res.push(array[i]);
//         }
//     }
// }

// function isPar(valor){
//     return valor%2 == 0;
// }

// function find(array, callback){
//     res = null;
//     for(i=0;i<array.length && !res;i++){
//         if(callback(array[i], i, array)){
//             res = array[i];
//         }
//     }
//     console.log(res);
// }

// function primerIgual(valor, posicion, array){
//     for(posicion;posicion<array.length;posicion++){
//         return valor == array[posicion];
//     }
// }

// let array = [3,6,9,7,7,4,9];
// find(array, primerIgual);
/* 
function every(array, callback){
    let check = true;
    for(i=0;i<array.length && check;i++){
        check = callback(array[i]);
    }
    return check;
}

function callback(valor){
    return valor > 18;
}

let array = [2,5,27,42,9];
every(array, callback); */

class Coche{
    static marchas = ["P",1,2,3,4,5,6,"R"];
 
     constructor(fabricante, modelo){
         this.fabricante = fabricante;
         this.modelo = modelo;
         this.marchaActual = "P";
     }
 
     cambiarMarcha(marcha, marchas){
         let res = '';
         for(let i=0;i<marchas.length;i++){
            if(this.filter(marchas,i,marcha)){
                res = marchas[i];
            }
         }
     }
 
     filter(marchas, posicion, marcha){
        return marchas[posicion] == marcha;
     }
     
 }
 
 let coche = new Coche("Honda", "Civic");
 coche.cambiarMarcha(3, coche.marchas);
 console.log(coche.marchaActual);