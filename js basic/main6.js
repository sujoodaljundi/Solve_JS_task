"use strict"
var fruit=["banana","apple","orange","watermelon"];
var vegetables=["carrot","tomato","pepper","lettuce"];
console.log(fruit,"fruit arr");
console.log(vegetables,"vegetable arr")
// case a
vegetables.pop();
console.log(vegetables,"pop last item at the vegetable arr");
// case b
fruit.shift();
console.log(fruit,"pop first item at the fruit arr");
// case c
let index= fruit.indexOf("orange");
console.log(index, "index of orange item from fruit arr after pop in the last case");
//case d 
fruit.push(index);
console.log(fruit,"add index in the last case to the end of fruit arr");
// case e
let lengthOfvegetablesArr= vegetables.length;
console.log(lengthOfvegetablesArr, "length Of vegetablesArr after pop");
// case f
vegetables.push(lengthOfvegetablesArr);
console.log(vegetables,"add length in the last case to the end of vegetables arr");
//case g
let food=fruit.concat(vegetables);
console.log(food, "creat foodArr by concatenation fruit and vegetables arrays");
// case h
let startIndex = 4 ;
food.splice(startIndex,2);
console.log(food,"food arr after remove 2 items from index 4");
//case i
food.reverse();
console.log(food,"reverse food arr");
//case j
let str=food.join(" ");
console.log(str ,"'from food arr to string' ");
