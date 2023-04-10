// Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let lista$$ = document.createElement("ul")

const elementosLista$$ = [];
const appNodosTexto$$ = [];

for(let i = 0; i < apps.length; i++){
    elementosLista$$[i] = document.createElement("li");
    console.log(elementosLista$$)
    appNodosTexto$$[i] = document.createTextNode(apps[i]);
    elementosLista$$[i].appendChild(appNodosTexto$$[i]);
    lista$$.appendChild(elementosLista$$[i]);
}

let bodyDelHtml$$ = document.querySelector("body");
bodyDelHtml$$.appendChild(lista$$);