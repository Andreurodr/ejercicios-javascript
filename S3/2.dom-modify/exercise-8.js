const body$$ = document.querySelector("body");
const div$$ = document.querySelectorAll("div");
const segundoDiv$$ = div$$[1];

const p$$ = document.createElement("p");
p$$.textContent = "Voy en medio!";

body$$.insertBefore(p$$, segundoDiv$$)