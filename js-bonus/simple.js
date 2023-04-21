/*
for (let i = 1; i < 6; i++) {
    console.log(i);
}

let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}
*/
function consoleNumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    consoleNumber(++i);
}

consoleNumber(1);