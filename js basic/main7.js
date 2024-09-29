 "use strict"
// case 1
function  stringToArray (str1) {
    
    return str1.split(" ");
}
let result= stringToArray("Orange Jordan")
console.log(result,"function that makes each word in A string an element of an array");

"use strict";



// case 2
function hiddenNum(phoneNum) {
    let numArray = phoneNum.toString().split(""); 

    for (let i = 0; i < 7; i++) {
        numArray[i] = "*"; 
    }
    
    return numArray.join("");
}
let sampleNum = hiddenNum("0776807777"); 
console.log(sampleNum," function that converts the first seven digits of a mobile phone number to a hidden form"); 



//case 3
function hideEmail(email) {

 let[localPart,domainPart]=email.split("@");// here we split email befor and after @
let visibleChars = localPart.length > 3 ? localPart.length - 5 : localPart.length;// here we mack sure if length of localpart greater than 3 dighit if its true we -5 char and we store it at variable
let hiddenEmail = localPart.slice(0, visibleChars) + "....." + "@" + domainPart;  //we collect the parts of email from 0 to var we save  then we add ..... then @ and the end of email address
return hiddenEmail;
}
let sampleEmail=hideEmail("orange_academy@orange.jo");
console.log(sampleEmail,"function that converts an email address to a hidden form");




//case 4
function capitalizeFirstLetter(str2) {
    // 1. Split the string into words using split
    let words = str2.split(" "); // Split the text into words using a space as a delimiter

    // 2. Use map to convert the first letter of each word to uppercase
    let capitalizedWords = words.map(word => { // We use map to apply the function to all words in the array
        if (word.length === 0) return word; // Check if the word is empty; if it is, return it as is
        return word.charAt(0).toUpperCase() + word.slice(1); // Convert the first letter of the word to uppercase and add the rest of the word
    });

    // 3. Join the words back into a single string using join
    return capitalizedWords.join(" "); // Return the combined words as a single string with a space as a separator
}

let sampleStr = capitalizeFirstLetter("coding academy by orange");
console.log(sampleStr, "a function that turns the first letter of every word in a string to the upper case");




//case 5 
function flipNum(num) {
    let flippedNum = num.toString().split("").reverse().join("");
    return Number(flippedNum);
}
let sampleFlipnum = flipNum(92485);
console.log(sampleFlipnum,"a function that flips a number");




//case 6
//first way
function swapBydestructuring(a, b) {
    [a, b] = [b, a]; // Use destructuring to swap the values of a and b
    console.log("After swap (using destructuring):", a, b); // Display the values after the swap
}
let a = 3, b = 4; // Initialize variables a and b with values 3 and 4
swapBydestructuring( a, b);



// 2nd way
function swapByvar(params) {
    let x = A;
    A= B;
    B = x;
    console.log("After swap (using Variable)",A, B);
}
let A = 6, B = 8; // Initialize variables A and B with values 3 and 4
swapByvar( A, B);



// 3rd way
function swapByMath(a, b) {
    a = a + b;    
    b = a - b;  
    a = a - b;  
    console.log("After swap (By math):", a, b);
}
let p = 7, q = 14;
swapByMath(p, q)




// case 8
function removeCharacter (str3,index){
    let beforIndex= str3.slice(0,index);    // Get the part of the string before the character to be removed

    let afterIndex= str3.slice(index+1);    // Get the part of the string after the character to be removed

    return beforIndex + afterIndex;       // Combine both parts to remove the character at the specified index

}
let strSample=removeCharacter("Orange",3);
console.log(strSample," function that removes an indexed character from a string");





// case 9
function margenStr(str4,str5){
    let newStr1 = str4.slice(1);     // Remove the first character from each string
    let newStr2 = str5.slice(1);
   let margin = newStr1 + newStr2;    // Combine the two strings
   return margin; // Return the merged string

}
let sampleMargin =margenStr("lora","inge");
console.log(sampleMargin," function that merges two strings after removing the first character of each one.");




// case 10
function checkCharacter(strings, char) {
    let firstChar = strings[0] === char; // Check if first character matches
    let lastChar = strings[strings.length - 1] === char; // Check if last character matches
    
    return firstChar || lastChar; // Return true if either condition is true
}
console.log(checkCharacter("orange", "o"),"function that ensures a specific character appears in a string's first position."); 
console.log(checkCharacter("orange", "z"),"function that ensures a specific character appears in a string's last position."); 



// case 11
function arrFromstr(strings) {
    let array=strings.split(" ")
    return array;  
}
console.log(arrFromstr("Coding Academy by Orange"),"function that takes a string and returns every word in the string as an array element");


// case 12
function reordersChar(char) {
    let charArray = char.split('');     // Split the input string into an array 
 
    charArray.sort();   // Sort the array of characters in alphabetical order
                        // Note: Uppercase letters will be sorted before lowercase letters

    let orderedString = charArray.join("");     // Join the sorted array of characters back into a single string


    return orderedString; 
}

let reorderSample = reordersChar("Orange");
console.log(reorderSample,"function that takes a string and reorders the characters alphabetically"); 


