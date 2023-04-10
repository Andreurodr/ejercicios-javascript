const body$$ = document.querySelector("body");
const div$$ = document.createElement("div")

body$$.appendChild(div$$);

let nodoP$$ = [];

for (let i = 0; i < 6; i++) {
    nodoP$$[i] = document.createElement("p")
    div$$.appendChild(nodoP$$[i]);
}

