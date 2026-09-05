let age = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height:"));
let weight = Number(prompt("Enter your weight:"));

if (age >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected because weight is below 60");
        }

    } else {
        console.log("You are not selected because height is below 160");
    }

} else {
    console.log("You are not selected because age is below 18");
}