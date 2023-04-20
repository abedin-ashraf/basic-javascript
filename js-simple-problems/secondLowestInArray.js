function secondLowest(numbers) {
    let lowest = numbers[0];
    let secondlow = 0;
    let temp = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < lowest) {
            temp = lowest;
            lowest = numbers[i];
            secondlow = temp;
        }
    }
    return secondlow;

}

let secondL = secondLowest([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -2, -7]);
console.log(secondL);