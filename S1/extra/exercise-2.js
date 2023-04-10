const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

const resultado = []; 

// for (i = 0; i < foodSchedule.length; i++){
//     if (foodSchedule[i].isVegan === false){
//         foodSchedule.splice(foodSchedule[i].name, 1, fruits[i])
//     }
// }
// console.log(foodSchedule);
for (let i = 0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan === false){
        foodSchedule[i].name = fruits.shift();
    }
}
console.log(foodSchedule);
