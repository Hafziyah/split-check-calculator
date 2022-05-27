let mealCost = 25.99;
let tip = 0.18;
let tipAmount = Number(mealCost * tip);
console.log(tipAmount.toFixed(2));

let total = mealCost + tipAmount;
console.log(total.toFixed(2));

let numOfPeople = 2;

console.log(`Your meal cost is $${mealCost}, and with the tip it comes to ${total.toFixed(2)}. Your share is $${total.toFixed(1)/numOfPeople}. Hope it was delicious!`)