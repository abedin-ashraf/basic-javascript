

function triangleArea(s1, s2, s3) {
    // s = (s1 + s2 + s3) / 2;
    let s = (s1 + s2 + s3) / 2;
    //Equation 
    let area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
    return area;
}

console.log(triangleArea(10, 20, 25).toFixed(2));