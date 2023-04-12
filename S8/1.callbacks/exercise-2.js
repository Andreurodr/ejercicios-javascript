// # Español
// Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. La función confirmExample recibirá una variable de tipo string (description) que mostrará como titulo de la ventana y retornará el valor del confirm. La función promptExample hará lo mismo pero con un prompt. La función father recibirá como parámetros description, con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).

// La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array userAnwsers.

// Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers

// guia de confirm y prompt
// const confirmValue = confirm('');
// const propmt = prompt('Soy un texto');

const userAnwsers = [];

function confirmExample(description){
        const confirmValue = confirm(description);
        return confirmValue;
 };

function promptExample(description){
    const promptValue = prompt(description);
    return promptValue;
}

function father(description, callback){
    const respuesta = callback(description)
    userAnwsers.push(respuesta);
}

father('Hola soy Andreu', confirmExample());
father('Qué tal estás', promptExample());
father('Aloha vecinito',  confirmExample());
console.log(userAnwsers)

//No logro entender el resultado que se pretende obtener. No sé si es justo lo que se pide.