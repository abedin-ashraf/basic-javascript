var skyColor = 'white';

var phone = ['iphone', 'Xiaomi', 'Samsung'];
phone.push('Oppo');
phone[4] = 'Walton';
phone.push('LG');

if (phone.indexOf('oppo') == -1) {
    console.log("Oppo is missing in the list");
}

if (phone.indexOf('LG') != -1) {
    console.log("LG is availabe now");
}

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(add(10, 20, 30));

var mike = { brand: 'rode', color: 'black', price: 130 };
console.log(mike.price);
console.log(mike["brand"]);