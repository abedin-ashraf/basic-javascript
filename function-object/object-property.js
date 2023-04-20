var computer = {
    price: 209900,
    storage: '159gb',
    processor: 'intel i5',
    color: 'blue'
}

// console.log(computer.price);
// computer.price = 343434434;
// console.log(computer.price);

computer['price'] = 2939393;
console.log(computer["price"]);

var newPrice = "price";
computer['newPrice'] = 29898989;
console.log(computer['newPrice']);