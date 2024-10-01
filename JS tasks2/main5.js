"use strict"

//case 1
function findSmallest(arr) {
    return Math.min(...arr);
}
console.log(findSmallest([30, 45, 60, 7]));

//case 2
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log(alphabeticalOrder('hello'))


//case 3
function countWords(str) {
    return str.split(' ').length;
}
console.log(countWords('hello from CodingAcademy!')); 

//case 4
function multiplyByLength(arr) {
    return arr.map(num => num * arr.length);
}
console.log(multiplyByLength([4, 2, 5])); 

//case 5
function doubleChar(str) {
    return str.split('').map(char => char.repeat(2)).join('');
}
console.log(doubleChar('Coding')); 