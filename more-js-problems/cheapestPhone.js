const phones = [
    { name: 'samsung', price: 45000, camera: 10, storage: 32 },
    { name: 'walton', price: 450, camera: 10, storage: 32 },
    { name: 'Iphone', price: 400, camera: 10, storage: 32 },
    { name: 'Xiaomi', price: 4000, camera: 10, storage: 32 },
    { name: 'Oppo', price: 4000, camera: 10, storage: 32 },
    { name: 'Nokia', price: 5000, camera: 10, storage: 32 },
    { name: 'HTC', price: 15000, camera: 10, storage: 32 },
]

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);