// Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
// `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
// llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
// javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let frutas = ["Naranjas", "Peras", "Mandarinas", "Manzanas", "Piñas"];

function findArrayIndex(array, text) {
    for (const position of array) {
        if (text === position){
        return array.indexOf(position);
        }
    }
}

function removeItem(array, text){
    let i = findArrayIndex(array, text)
    array.splice(i, 1)
    return array;
}

removeItem(frutas, "Mandarinas")
console.log(frutas)
