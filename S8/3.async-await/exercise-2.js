// Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;


// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }

// getCharacters();


const getCharacters = async () => {
    const result = await fetch('https://rickandmortyapi.com/api/character')
    const res = await result.json()
    const characters = await console.log(res.results)
}

getCharacters()