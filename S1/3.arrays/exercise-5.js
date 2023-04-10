// Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.splice(rickAndMortyCharacters.length-1, 1);
console.log(rickAndMortyCharacters.shift());
console.log(rickAndMortyCharacters.pop());