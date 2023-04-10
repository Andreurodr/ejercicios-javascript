// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

const body$$ = document.querySelector("body")
const btn$$ = document.querySelector("button")
const input$$ = document.querySelector("input")

const baseUrl = 'https://api.nationalize.io?name=';

const fetchAndP = async (name) => {
    const response = await fetch(baseUrl + name)
    const data = await response.json();
    const parrafo = createP(data)
    const boton = createButton()
}

const createP = (name) => {
    const p$$ = document.createElement("p")
    body$$.appendChild(p$$)
    p$$.innerHTML += `El nombre ${name.name} tiene un ${Math.round(name.country[0].probability * 100)} porciento de ser de ${name.country[0].country_id} y un ${Math.round(name.country[1].probability * 100)} porciento de ser de ${name.country[1].country_id}.`
    const buttonX$$ = document.createElement("button")
    buttonX$$.innerHTML = "X"
    p$$.appendChild(buttonX$$)
    buttonX$$.addEventListener("click", (event) => (p$$.innerHTML = ""))
}



// const remove = () => {
//     buttonX$$.addEventListener("click", (event) => ())
// }

btn$$.addEventListener("click", (event) => fetchAndP((input$$.value.toLowerCase())))
    