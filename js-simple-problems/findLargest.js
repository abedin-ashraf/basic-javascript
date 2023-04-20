function findLarge(x, y, z) {
    if (x > y && x > z) {
        return x;
    }
    else if (y > x && y > z) {
        return y;
    }
    else {
        return z;
    }
}

let largest = findLarge(100, 200.3, 200.5);
console.log(largest);