const eliminados$$ = document.querySelectorAll(".fn-remove-me");
console.log(eliminados$$);

for (let i = 0; i < eliminados$$.length; i++) {
    eliminados$$[i].remove();
}
