function largestElement(numbers) {
    let max = numbers[0];
    let evenMax = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if ((numbers[i] % 2 == 0) && numbers[i] > evenMax) {
            evenMax = numbers[i];
        }
    }

    console.log("Largest Number:", max);
    console.log("Largest Even Number:", evenMax);
}

largestElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);