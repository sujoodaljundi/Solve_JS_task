"use strict"
let str="cactus";
let firstChar=str.charAt(0);
let newStr=str.replace(new RegExp(firstChar,'g'),'*');
newStr = firstChar + newStr.slice(1);  
console.log(newStr,'by RegExp and slice');
