// function anadirPrefijo(prefijo, ...palabras){
//     const palabrasConPrefijo = [];
//     for(let i=0;i<palabras.length;i++){
//         palabrasConPrefijo[i] = prefijo + palabras[i];
//     }
//     return palabrasConPrefijo;
// }

// añadirPrefijo("con", "verso", "vexo", "cavo");

// const saludo = function(){
//     return "¡Hola!";
// };

// const saludoConNombre = function (nombre) {
//     return 'Hola ' + nombre;
// };

// const sumar = function(a, b){
//     return a+b;
// };

// console.log(saludo());
// console.log(saludoConNombre('calvo'));
// console.log(sumar(2,2));
class Coche {

    #fabricante = '';
    #modelo = '';
    #marchaActual = "P";

    static marchas(){
        const MARCHAS = ["P",1,2,3,4,5,6,"R"];
        return MARCHAS;
    }

    constructor(fabricante, modelo) {
        this.#fabricante = fabricante;
        this.#modelo = modelo;
    }

    cambiarMarcha(input){
        let res = '';
        res = this.marchas.filter(marcha => input == marcha);
        if(res == ''){
            this.marchaActual = "P";
        }else{
            this.marchaActual = res;
        }
    }

    get modelo(){
        return this.#modelo;
    }
    
    get fabricante(){
        return this.#fabricante;
    }
    
    set fabricante(fabricante){
        this.#fabricante = fabricante;
    }

    set modelo(modelo){
        this.#modelo = modelo;
    }
    
}

let coche = new Coche("Honda", "Civic");
coche.cambiarMarcha(27);
console.log(coche.marchaActual);