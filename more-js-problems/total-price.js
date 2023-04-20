const products = [
    { name: 'laptop', price: 43000, quantity: 12 },
    { name: 'shirt', price: 500, quantity: 5 },
    { name: 'watch', price: 3400, quantity: 10 },
    { name: 'phone', price: 55000, quantity: 34 }
]
let totalPrice = 0;
for (let product of products) {
    totalPrice += (product.price * product.quantity);
}

console.log(totalPrice);
console.log(products);