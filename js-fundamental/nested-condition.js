var danish = 40;
var butterban = 25;
var toast = 10;
var money = 30;
var packed = false;

if (danish < money) {
    console.log("Danish khabo");
}
else {
    if (butterban < money) {
        if (packed == true) {
            console.log("Butteran khabo");
        }
        else {
            console.log("Butterban khabo na machi keye pelse")
        }
    }
    else {
        if (toast < money) {
            console.log("Toast Biscuit khabo");
        }
        else {
            console.log("Batash khabo");
        }
    }
}