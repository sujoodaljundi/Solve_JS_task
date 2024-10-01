"use strict"
//case 1

let password = "mypassword123";
if (password.length >= 8) {
    console.log("Your password is strong");
}

//case 2
let color = "red";
if (color === "red" || color === "green" || color === "blue") {
    console.log("Color is a primary color");
}

//case 3

let y = -5;
if (y < 0) {
    console.log("y is a negative number");
}

//case 4
let list = [1, 2, 3];
if (Array.isArray(list)) {
    console.log("It's an array");
}