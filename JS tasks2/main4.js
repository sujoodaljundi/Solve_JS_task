"use strict"

//case 1
let person = { name: "Adam", age: 25 };
person["gender"] = "male";
console.log(person);

//case 2

 let person1 = { name: "Adam", age: 25, gender: "male" };
let values = Object.values(person1);
console.log(values); 

//case 3
let person3 = { name: "Adam", age: 25, gender: "male" };
let entries = Object.entries(person3);
console.log(entries);

//case4
let person4 = { name: "Adam", age: 25 };
let additionalInfo = { gender: "male" };
let merged = Object.assign(person4, additionalInfo);
console.log(merged); 

//case 5
let person5 = { name: "Adam", age: 25 };
Object.seal(person5);
person.name = "John";  
person.gender = "male"; 
console.log(person5); 