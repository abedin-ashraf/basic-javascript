function largest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

let large = largest([323, 434, 434, 566, 6564, 3434]);
let large2 = largest([-1, -2, -4, -6, -6]);
console.log(large);
console.log(large2);
