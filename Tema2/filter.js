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

function find(array, callback){
    res = null;
    for(i=0;i<array.length && !res;i++){
        if(callback(array[i], i, array)){
            res = array[i];
        }
    }
}

function primerIgual(){
    for(i;i<array.length;i++){
        
    }
}

let array = [3,6,9,7,7,4,9];
find(array, primerIgual);