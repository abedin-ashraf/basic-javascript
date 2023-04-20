

function removeDup(numbers) {
    let nums = [];
    for (let i of numbers) {
        if (nums.indexOf(i) == -1) {
            nums.push(i);
        }
    }
    return nums;
}

let dupliNumbers = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 3, 2, 4, 2, 3, 3, 3, 3, 3, 3, 9,];
let num = removeDup(dupliNumbers);
console.log(num);