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