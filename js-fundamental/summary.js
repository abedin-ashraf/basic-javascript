var tableLength = 12;
var price = [1, 2, 3, 4, 5, 5, 6, 6, 7, 5, 34];
console.log(price.indexOf(3));
console.log(price.length);
price.push(2);
price.unshift(0);
console.log(price);
var lastnumber = price.pop();
price.shift();
console.log(price);

console.log(lastnumber);

var eggPrice = 32;
var budget = 32;
if (eggPrice <= budget) {
    console.log("Dim khabo");
}