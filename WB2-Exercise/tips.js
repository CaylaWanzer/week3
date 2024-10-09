// sample inputs
let identifier = "value";

let foodCost = 79.25;
let tax = 6.54;
let tip = (12).toFixed(2);
// tip = tip.toFixed(2)
// calculation
let totalDue = foodCost + tax + tip;
// output
// console.log("The total due is " + totalDue);
// console.log("The tip is " + tip);
// console.log("total due is " + totalDue);

console.log(`
    The food cost is ${foodCost} 
    The tip is ${tip}
    The tax is ${tax}
    total due is + ${totalDue}
`);