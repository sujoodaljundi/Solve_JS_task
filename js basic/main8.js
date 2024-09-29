 "use strict"
// case 1
let age = prompt('Enter your age');
    if (age > 60) {
        alert('You may join the seniors’ program.');
    } else if (age > 30) {
        alert('You are not eligible. You may join other programs.');
    } else if (age >= 18 && age <= 30) {
        alert('You are eligible. Start your application.');
    } else {
        alert('You may join the kids\' program.');
    };


// case 2
function switchLettercase(str) {

    let result = ''; 
    for(let i=0;i<str.length;i++){
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase(); // Convert to lowercase if it's uppercase
        }else {
            result += str[i].toUpperCase(); // Convert to uppercase if it's lowercase
        }
    }
    return result;
}
let sampleSwitchletterCase = switchLettercase("OrAnGe");
console.log(sampleSwitchletterCase," function that switches the case of each letter in a string ")

//case 3
function toCamelCase(str) {
    // تقسيم السلسلة إلى كلمات
    let words = str.split(" ");
    let camelCaseString = words.map(word => {      // تحقق مما إذا كانت الكلمة غير فارغة
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1); // تحويل الحرف الأول إلى كبير
        } else {
            return ""; // إذا كانت الكلمة فارغة، نعيد سلسلة فارغة
        }
    }).join("");
    return camelCaseString; // Return the final Camel Case string
}

let sampleInput = toCamelCase("Coding Academy by Orange");
console.log(sampleInput,"a function that takes a string, capitalizes each word's first letter, and removes all spaces"); 

//case 4
function removeElement(arr, elementToRemove) {
    let newArr = arr.filter(item => item !== elementToRemove);    // Use filter to create a new array without the specified element
    return newArr; 
}
let sampleFilter= ["Coding", "By","Academy", "By", "Orange"];
let output = removeElement(sampleFilter, "By");
console.log(output,"function that removes a specific element in an array");


// case 5
function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even"; 
     } else {
        return "Odd"; 
    }
}
let checkNum = checkOddEven(5);
console.log(`The number ${5} is ${checkNum}.`);

// case 6
function isNumber(input) {
    return typeof input === 'number' && !isNaN(input);
}
let sampleInput1 = 42;        
let sampleInput2 = "Hello";  
let sampleInput3 = NaN;       

console.log(`Is ${sampleInput1} a number? ${isNumber(sampleInput1)}`); 
console.log(`Is ${sampleInput2} a number? ${isNumber(sampleInput2)}`); 
console.log(`Is ${sampleInput3} a number? ${isNumber(sampleInput3)}`); 