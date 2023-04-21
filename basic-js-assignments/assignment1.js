//Problem 1
function anaToVori(ana) {

    if (ana < 0) {
        return "Wrong input";
    }
    // 16 ana = 1 vori
    let vori = ana / 16;
    return vori;
}

let ana1 = 104;
let vori1 = anaToVori(ana1);
console.log(vori1);
