function lowestInArray(numbers) {
    let lowest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (lowest > numbers[i]) {
            lowest = numbers[i];
        }
    }
    return lowest;
}

let low = lowestInArray([9, 65, 34, 5656, 545, 3434, 5, 1, -3, 5446, 656]);
console.log(low);