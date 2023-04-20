function animalCount(miles) {
    const AnimalDensityFirst10Miles = 10;
    const AnimalDensitySecondt10Miles = 100;
    const AnimalDensityRestMiles = 150;
    if (miles <= 10) {
        const count = miles * 10;
        return count;
    }
    else if (miles <= 20) {
        const first10 = 10 * AnimalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimal = restMiles * AnimalDensitySecondt10Miles;
        const count = first10 + secondDenseAnimal;
        return count;

    }
    else {
        const first10 = 10 * AnimalDensityFirst10Miles;
        const secondDenseAnimal = 10 * AnimalDensitySecondt10Miles;
        const restMiles = miles - 20;
        const restDenseAnimal = restMiles * AnimalDensityRestMiles;
        const count = first10 + secondDenseAnimal + restDenseAnimal;
        return count;

    }
}

const anCount = animalCount(35);
console.log(anCount);