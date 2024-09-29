"use strict"

// typeof(100) 
console.log(typeof(100), "The value `100` is a floating-point number, and JavaScript classifies all numbers (integers and floats) under the type `number`.");

// typeof(73.9)
console.log(typeof(73.9), "The value `73.9` is a floating-point number, and JavaScript classifies all numbers (integers and floats) under the type `number`.");

// typeof(NaN)
console.log(typeof(NaN), "NaN is a special value of type number. Although it represents a value that is not a valid number, JavaScript treats it as a member of the number type.");

// typeof("Water")
console.log(typeof("Water"), "Since 'Water' is a string, the result is 'string'.");

// typeof(false) 
console.log(typeof(false), "False is a boolean value, and the typeof operator will return 'boolean'.");

// typeof(9 != 11)
console.log(typeof(9 != 11), "The result is a boolean value, so typeof(true) will return 'boolean'.");

// "Orang" + "e"
console.log("Orang" + "e", "The two strings 'Orang' and 'e' are combined into one.");

// "Orange" - "s"
console.log("Orange" - "s", "When you try to subtract one string from another, JavaScript attempts to convert the strings into numbers.");

// "4" + "8"
console.log("4" + "8", "The + operator concatenates strings.");

// "4" - "8"
console.log("4" - "8", "When you use the - operator between two strings that contain numeric values, JavaScript automatically converts those strings to numbers and performs the subtraction.");

// "name" + 3
console.log("name" + 3, "The number is automatically converted to a string, and the two are concatenated.");

// "name" - 3
console.log("name" - 3, "JavaScript attempts to convert the string 'name' into a number. Since 'name' is not a valid number, the result is NaN (Not-a-Number).");

// 82 * "word"
console.log(82 * "word", "In this case, 82 is a number, but 'word' is a string that cannot be converted to a valid number.");

// 1 + "hello"
console.log(1 + "hello", "When you use the + operator between a number and a string, the number is automatically converted to a string, and they are concatenated together.");

// "hello" + 1  
console.log("hello" + 1, "The + operator concatenates strings.");

// 1 + true
console.log(1 + true, "In JavaScript, the boolean value true is automatically converted to the number 1 when used in a mathematical operation.");

// "hello" + true  
console.log("hello" + true, "In this case, the boolean value true is converted to the string 'true' when concatenated with the string 'hello'.");

// typeof(Infinity)  
console.log(typeof(Infinity), "Even though it signifies an infinite quantity, it is still considered a type of number.");

// 1 == '1'
console.log(1 == '1', "The string is converted to a number for the comparison.");

// 1 === '1'
console.log(1 === '1', "The === operator checks for both value and type equality without performing type coercion.");
