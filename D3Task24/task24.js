let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80 && marks <= 89) {
    console.log("B Grade");
} else if (marks >= 70 && marks <= 79) {
    console.log("C Grade");
} else if (marks >= 60 && marks <= 69) {
    console.log("D Grade");
} else if (marks < 60) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}