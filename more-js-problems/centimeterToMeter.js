function cmToMeterConverter(centimeter) {
    // 100 centimeter = 1 meter
    return centimeter / 100;
}

let meter = cmToMeterConverter(350);
console.log("Total Meter is", meter);
