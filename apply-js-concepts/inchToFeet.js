var inch = 144;

var foot = inchFoot(inch);
console.log(foot);

var dadi = 145;
var feet = inchFoot(dadi);
console.log(feet);

function inchFoot(inch) {
    return inch / 12;
}

function mileTOKilometer(mile) {
    var kilometer = mile * 1.6093;
    return kilometer;
}

var marathon = mileTOKilometer(34);
console.log(marathon);