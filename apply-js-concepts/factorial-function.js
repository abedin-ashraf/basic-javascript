// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial *= i;
// }
// console.log(factorial);

function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
}

let fact9 = factorial(9);
console.log(fact9);