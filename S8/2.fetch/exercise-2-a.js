// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <input type="text">
//     <button>Consultar</button>
// </body>
// </html>
const btn$$ = document.querySelector("button")
const input$$ = document.querySelector("input")

const baseUrl = 'https://api.nationalize.io?name=';

const get = async (name) => {
    response = await fetch(baseUrl + name)
    data = await response.json();
    console.log(data)
}

btn$$.addEventListener("click", (event) => get((input$$.value.toLowerCase())))






