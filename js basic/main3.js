"use strict"
// Case 1
let str="Welcome to Orange";
let upperCase=str.toUpperCase();
console.log(upperCase,"by upperCass method");
// Case 2
let substring=upperCase.substring(8,10);
console.log(substring, "by substring method");
//Case 3
let replace=str.replace("Welcome to","Hello from")
console.log(replace,"by replace method");
//Case 4
let lowerCase=upperCase.toLowerCase();
console.log(lowerCase, "by lowercase method");
//case 5
let lengthOfStr=str.length;
console.log(lengthOfStr,"by length");
//case 6
let newStr = str.replace("Orange", '"Orange"');
console.log(newStr);
//case 7
let addStr = `${str} Jordan`;
console.log(addStr, "by Template Literals"); // we can do it by + also



