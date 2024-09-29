"use strict"

// case 1
let arr = ["Coding", "Academy", "By", "Orange"];
let newArr1 = arr.slice();
newArr1.push("Jordan");
console.log(newArr1, "add an item to the end arr using push");

// case 2
let newArr2 = arr.slice();
for (let i = 0; i < 2; i++) {
    newArr2.pop(); // Remove last item
}
console.log(newArr2, "remove an item to the end arr using pop");

// case 3
let newArr3 = arr.slice();
newArr3.unshift("Welcome", "To"); // Corrected spelling of "Welcome"
console.log(newArr3, "add items to the beginning of arr using unshift");

// case 4
let newArr4 = arr.slice();
    newArr4.shift(); 
console.log(newArr4, "remove items from the beginning of arr using shift");

// case 5
let newArr5 = arr.slice();
let str=newArr5.join(" ");
console.log(str,"from arr to str");

// case 6
let newArr6= str.split(" ");
console.log(newArr6,"from str to arr");

// case 7
let newArr7=arr.slice();
let newArr8=newArr7.filter((item,index)=> index === 0 || index ===3);
console.log(newArr8,"by filter");
// another way
let newArr9= [newArr7[0],newArr7[3]];
console.log(newArr9,"by slice");