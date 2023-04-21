//Problem 3
function picnicBudget(quantity) {
    // 1 - 100 = 5000/person
    // 101 - 200 = 4000/person
    // 201 - .... = 3000/person
    const first100PricePerPerson = 5000;
    const second100PricePerPerson = 4000;
    const restPricePerPerson = 3000;

    if (quantity < 0) {
        return "Wrong Input";
    }

    else if (quantity <= 100) {
        let totalCost = quantity * first100PricePerPerson;
        return totalCost;
    }
    else if (quantity <= 200) {
        let first100Cost = 100 * first100PricePerPerson;
        let restQuantity = quantity - 100;
        let restQuantityCost = restQuantity * second100PricePerPerson;
        let totalCost = first100Cost + restQuantityCost;
        return totalCost;
    }
    else {
        let first100Cost = 100 * first100PricePerPerson;
        let second100Cost = 100 * second100PricePerPerson;
        let restQuantity = quantity - 200;
        let restQuantityCost = restQuantity * restPricePerPerson;
        let totalPrice = first100Cost + second100Cost + restQuantityCost;
        return totalPrice;
    }


}

let person = 250;
let cost = picnicBudget(person);
console.log("Total Cost", cost);