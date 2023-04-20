

// function factorial(number) {
//     let fact = 1;
//     let i = 1;
//     while (i <= number) {
//         fact *= i;
//         i++;
//     }
//     return fact;
// }

// function factorial(number) {
//     let fact = 1;
//     let i = number;
//     while (i >= 1) {
//         fact *= i;
//         i--;
//     }
//     return fact;
// }

function factorial(number) {
    let fact = 1;
    for (let i = number; i >= 1; i--) {
        fact *= i;
    }
    return fact;
}

let fact10 = factorial(7);
console.log(fact10);