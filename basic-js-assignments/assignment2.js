//Problem 2
function pandaCost(singaraQuantity, somuchaQuantity, jelephiQuantity) {

    if (singaraQuantity < 0 || somuchaQuantity < 0 || jelephiQuantity < 0) {
        return "Wrong Input";
    }

    // 1 singara = 7tk;
    // 1 somucha = 10tk;
    // 1 jelephi = 15tk;
    const singaraPrice = 7;
    const somuchaPrice = 10;
    const jelephiPrice = 15;

    const totalSingaraPrice = singaraQuantity * singaraPrice;
    const totalSomuchaPrice = somuchaQuantity * somuchaPrice;
    const totalJelephiPrice = jelephiQuantity * jelephiPrice;

    const totalPrice = totalSingaraPrice + totalSomuchaPrice + totalJelephiPrice;

    //returning totalprice
    return totalPrice;

}

let singara = 10;
let somucha = 7;
let jelephi = 5;
let totalCost = pandaCost(singara, somucha, jelephi);
console.log(totalCost);