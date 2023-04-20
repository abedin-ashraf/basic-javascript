let num = 123456789;

function reverseNum(num) {
    let num2 = num.toString();
    number = [];
    for (let i = 0; i < num2.length; i++) {
        number = num2[i] + number;
    }
    return parseInt(number);

}

console.log(reverseNum(num));