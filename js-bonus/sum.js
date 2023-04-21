
// let sum = 0;

// for (let i = 5; i >= 1; is--) {
//     sum += i;
// }

// console.log(sum);

let sum = 0;
function sumNumber(i) {
    if (i == 1) {
        return 1;
    }
    sum = i + sumNumber(--i);
    return sum;
}
console.log(sumNumber(6));