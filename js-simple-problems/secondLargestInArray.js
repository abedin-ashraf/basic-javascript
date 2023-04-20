
function secondLargest(numbers) {
    let large = numbers[0];
    let secondLarge = 0;
    let temp = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > large) {
            temp = large;
            large = numbers[i];
            secondLarge = temp;
        }
    }
    return secondLarge;
}

let second = secondLargest([10, 20, 43, 32, 432, 4343, 44]);
console.log(second);