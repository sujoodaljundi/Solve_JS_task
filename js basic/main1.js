"use strict"

// Cash flow ratio 
let cash = 1000;
let currentLiabilities = 500; 
let cashFlowRatio = cash / currentLiabilities;
console.log(cashFlowRatio, "Cash Flow Ratio");

// Net income
let revenues = 1000;
let expenses = 500;
let netIncome = revenues - expenses;
console.log(netIncome, "Net Income");

// Total assets 
let liabilities = 1000; 
let equity = 500;
let totalAsset = liabilities + equity;
console.log(totalAsset, "Total Assets");

// Net income (using profit margin and sales) 
let profitMargin = 1000;
let sales = 500;
let NetIncome = profitMargin * sales;
console.log(NetIncome, "Net Income (using Profit Margin and Sales)");

// Average 
let numbers = [7, 9, 2];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
const average = sum / numbers.length;
console.log(average, "Average");

// Discount 
let price = 150;
let discount = 0.3;
let valueDiscount = price * discount;
let afterDiscount = price - valueDiscount;
console.log(afterDiscount, "Price After Discount");

// Age limit (older than 18 and less than 30) 
let age = 45;
if (age > 18 && age < 30) {
    age = true;
} else {
    age = false;
}
console.log(age, "Age Limit (older than 18 and less than 30)");

// Exponential
let num1 = 2;
let num2 = 3;
let exponential = num1 ** num2;
console.log(exponential, "Exponential");

// Remainder
let number1 = 10;
let number2 = 4;
let remainder = number1 % number2;
console.log(remainder, "Remainder");
