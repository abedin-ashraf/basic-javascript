let marks = 55;

function grader(mark) {
    if (marks >= 90) {
        console.log("A")
    }
    else if (marks >= 80) {
        console.log("B")
    }
    else if (marks >= 70) {
        console.log("C")
    }
    else if (marks >= 60) {
        console.log("D")
    }
    else if (marks >= 50) {
        console.log("E")
    }
    else {
        console.log("F");
    }
}

grader(marks);