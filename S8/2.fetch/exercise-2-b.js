// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

const body$$ = document.querySelector("body")
const btn$$ = document.querySelector("button")
const input$$ = document.querySelector("input")

const baseUrl = 'https://api.nationalize.io?name=';

const fetchAndP = async (name) => {
    response = await fetch(baseUrl + name)
    data = await response.json();
    createP(data)
}

const createP = (name) => {
    const p$$ = document.createElement("p")
    body$$.appendChild(p$$)
    p$$.innerHTML += `El nombre ${name.name} tiene un ${Math.round(name.country[0].probability * 100)} porciento de ser de ${name.country[0].country_id} y un ${Math.round(name.country[1].probability * 100)} porciento de ser de ${name.country[1].country_id}.`
}

btn$$.addEventListener("click", (event) => fetchAndP((input$$.value.toLowerCase())))
    
