
"use strict"

//case 1
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));  

//case 2
function fibonacci(limit) {
    let a = 0, b = 1;
    let result = [a, b];

    for (let i = 2; i < limit; i++) {
        let next = a + b;
        result.push(next);
        a = b;
        b = next;
    }
    return result.join(' ');
}

console.log(fibonacci(7));

//case 3

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function primeNumbers(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes.join(' ');
}

console.log(primeNumbers(20));  

//case 4
function print2DArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }
    return result.join(' ');
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(print2DArray(arr));

//case 5
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result.join(' ');
}

let arr2 = [1, 2, 3, 4, 5];
console.log(reverseArray(arr2)); 

