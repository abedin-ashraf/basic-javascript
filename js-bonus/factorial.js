
let fact = 1;
function factorial(n) {

    if (n == 1) {
        return 1;
    }
    fact = n * factorial(--n);
    return fact;
}

console.log(factorial(4));

// i * factorial(--i)
// 4 * factorial(3);
// 4 * 3 * factorial(2);
// 4 * 3 * 2 factorial(1);
// 4 * 3 * 2 * 1