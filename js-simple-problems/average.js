function averageInArray(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        count += numbers[i];
    }
    return count / numbers.length;
}

let average = averageInArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
console.log(average);