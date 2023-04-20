let farenheit = 98.4;

function tempConverter(temp) {
    let celcius = ((temp - 32) / 9) * 5;
    return celcius.toFixed(2);
}
console.log(tempConverter(farenheit));