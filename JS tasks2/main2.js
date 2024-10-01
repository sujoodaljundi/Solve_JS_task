"use strict"

//case 1
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray);

// case 2
function extractPortion(arr, start, end) {
    return arr.slice(0, start).concat(arr.slice(end));
  }
  
  const inputArray = [1, 2, 3, 4, 5, 6];
  const result = extractPortion(inputArray, 2, 4);
  
  console.log(result);
  
  // case 3
  let array3 = [1, 2, 3, 4, 5];
let removedElement = array3.splice(1, 1); 
console.log(array3);
console.log(removedElement,"removedElement");


let array4 = [1, 2, 4, 5];
array4.splice(1, 0, 2); 
console.log(array4,"addElement 2")


//case 4

let array5 = [1, 2, 3, 4, 5];
for (let element of array5) {
    console.log(element);  
}


//case 5
let array6 = [1, 2, 3, 4, 5];

array6.forEach(function(element) {
    console.log(element);  
});

array6.push(6);

console.log(array6);

