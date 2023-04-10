// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
// posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:



// Ej array:

const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let frutas = ["Naranjas", "Peras", "Mandarinas", "Manzanas", "Piñas"];


function findArrayIndex(array, text) {
    for (const position of array) {
        if (text === position){
        return array.indexOf(position);
        }
    }
}

console.log(findArrayIndex(animales, "Salamandra"));


