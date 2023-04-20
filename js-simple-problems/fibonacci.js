let nums = [];
nums[0] = 0;
nums[1] = 1;

for (let i = 2; i < 20; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
}
console.log(nums);

//Using for loop
function fibonacci(n) {
    if (typeof n != 'number') {
        return "Please enter a number!"
    }
    else if (n < 0) {
        return "Please enter a positive number!"
    }
    let numbers = [];
    numbers[0] = 0;
    numbers[1] = 1;
    for (let i = 2; i <= n; i++) {
        numbers[i] = numbers[i - 1] + numbers[i - 2];
    }
    return numbers[n - 1];
}

console.log(fibonacci("-10"));

//Recursion
function fib(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}

console.log(fib(7 - 1));