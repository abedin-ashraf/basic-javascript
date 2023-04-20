let num1 = 100;
let num2 = 20;
let num3 = 50;

/*
if (num1 > num2 && num1 > num3) {
    console.log("num1 is greater");
}
else if (num2 > num1 && num2 > num3) {
    console.log("num2 is greater");
}
else {
    console.log("num3 is greater")
}*/

console.log(Math.max(num1, num2, num3));

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

let largest = findLargest(10, 20);
console.log(largest);