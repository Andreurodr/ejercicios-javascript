// Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'}, {id: 40, name: 'El gato felix'}];


// for (const juguete of toys) {
//     let indice = toys.indexOf(juguete);
//     if (juguete.name.includes("gato")){
//         toys.splice(indice, 2);
//     }    
// }
// console.log(toys); 

//creo que la forma correcta de hacerlo de este modo sería poniendo en toys.splice(indice, 1); pero con ese código no elimina el gato félix, no entiendo el motivo. Entonces poniendo toys.splice(indice, 2); si lo elimina, pero no lo hace por causa del includes, sino de indicar que elimine 2 objetos consecutivos(que casualmente lo están).

//otra forma sería

const newToys = [];

for (const juguete of toys) {
    if (juguete.name.includes("gato") === false){
        newToys.push(juguete);
    }
}
console.log(newToys);