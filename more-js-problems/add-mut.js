/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;
    //Wood Calculation
    const chairWoodQuantity = chairQuantity * chairWood;
    const tableWoodQuantity = tableQuantity * tableWood;
    const bedWoodQuantity = bedQuantity * bedWood;
    //Add all Wood 
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(1, 0, 0);
console.log(firstOption);