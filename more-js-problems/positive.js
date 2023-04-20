let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, -2, 33, 56, 66, 55.44, 77];

function postiveNumber(array) {
    let arr = [];
    for (let i of array) {
        if (i < 0) {
            break;
        }
        arr.push(i);
    }
    return arr;
}
console.log(postiveNumber(arr));