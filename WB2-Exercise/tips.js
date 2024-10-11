// sample inputs
let identifier = "value";

let foodCost = 79.25;
let tax = 6.54;
let tip = 12;
// tip = tip.toFixed(2)
// calculation
let totalDue = foodCost + tax + tip;
// output
// console.log("The total due is " + totalDue);
// console.log("The tip is " + tip);
// console.log("total due is " + totalDue);

console.log(`
    The food cost is $${foodCost} The tax is $${tax}
    The tip is $${tip}
    total due is $${totalDue}
`);

var num = 5;
var sqrtOfNum = Math.sqrt(num);
console.log(sqrtOfNum);

var test1 = 92, test2 = 98, test3 = 82;
var lowestTestScore = Math.min(test1, test2, test3);
var highestTestScore = Math.max(test1, test2, test3);
console.log(lowestTestScore);
console.log(highestTestScore);

var num1 = 18.49, num2 = 18.5;
var x = Math.round(num1); // 18
var y = Math.round(num2); // 19
console.log( x,y)

let fahr = 50;
let celsius = (fahr - 32) * 5/9;
console.log(celsius);

let celsius = 10;
let fahr = (celsius * 9/5) + 32;
console.log(fahr);