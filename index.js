let mealCost = Number (prompt("How much did the meal cost? ex 25.99"));
let tip = Number (prompt("How much is the tip supposed to be? ex 0.18 for 18%"));
let tipAmount = mealCost * tip;
console.log(tipAmount.toFixed(2));

let total = mealCost + tipAmount;

console.log(total.toFixed(2));

let numOfPeople = prompt("The number of people dining are?")

console.log(`Your meal cost is $${mealCost}, and with the tip it comes to ${total.toFixed(2)}. Your share is $${(total/numOfPeople).toFixed(2)}. Hope it was delicious!`)