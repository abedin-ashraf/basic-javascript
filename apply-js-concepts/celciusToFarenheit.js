let celcius = 42.3;

function temperatureConverter(temp) {
    let farenheit = (temp / 5) * 9 + 32;
    return farenheit.toFixed(3);
}

console.log(temperatureConverter(celcius));