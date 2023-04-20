const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

function arraysum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const total = arraysum([1, 2, 4, 5, 6, 7, 8]);
console.log("Array total", total);