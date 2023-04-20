function findSmall(x, y, z) {
    if (x < y && x < z) {
        return x;
    }
    else if (y < x && y < z) {
        return y;
    }
    else {
        return z;
    }
}

let small = findSmall(.5, 0.55, .555);
console.log(small);
