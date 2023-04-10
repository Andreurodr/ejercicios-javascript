const divInsertar$$ = document.querySelectorAll(".fn-insert-here");

for (const element of divInsertar$$) {
    const newP$$ = document.createElement("p");
    newP$$.innerHTML = "Voy dentro!";
    element.appendChild(newP$$)
}
