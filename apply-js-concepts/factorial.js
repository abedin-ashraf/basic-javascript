

function factorial(num) {
    var fact = 1;
    for (var i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

var num = 5;
console.log(factorial(num));