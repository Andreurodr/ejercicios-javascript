// Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
// intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
// resultante.

// Sugerencia de array:

const futbolistas = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let frutas = ["Naranjas", "Peras", "Mandarinas", "Manzanas", "Piñas"];

function swap(array, indexA, indexB){
    let posicionA = array[indexA];
    let posicionB = array[indexB];
    array.splice(indexA, 1, posicionB);
    array.splice(indexB, 1, posicionA);
    return array
}

console.log(swap(futbolistas, 0, 3));