// Electricity bill
let units = 500;
if (units <= 100) {
    bill = units * 1.5;
}
else if (units <= 300) {
    bill = (100 * 1.5) + ((units - 100) * 2.5);
}
else {
    bill = (100 * 1.5) + (200 * 2.5) + ((units - 300) * 3.5);
}
console.log(`${bill}`);


// Calculate Tax
let salary = 0;
if (salary > 100000) {
    let tax = 10;
    let total = (salary * tax) / 100
    console.log(`${total}`);
    console.log(`${salary - total}`);
}
else if (salary > 400000) {
    tax = 5;
    console.log(`${(salary * tax) / 100}`);
}
else {
    console.log(`no tax`);
}

// Discount

let pur = 6000;
if (pur > 5000) {
    let discount = 10;
    let total = (pur * discount) / 100
    console.log(`${total}`);
    console.log(`${pur - total}`);
}
else if (pur > 400000) {
    tax = 5;
    console.log(`${(pur * discount) / 100}`);
}
else {
    console.log(`no discount`);
}


// Leap Year Checker
let Year = 2008;
if ((Year % 4 == 0) && (Year % 100 != 0))
    console.log("Leap Year");
else if (Year % 400 == 0)
    console.log("Leap year")
else
    console.log("not leap year");



// Odd or Even
let number = 4;
if (number % 2 == 0) {
    console.log("even number")
}
else if (number > 100 || number < 1) {
    console.log("out of range")
}
else {
    console.log("odd number")
}

// Number Category
let num = 102;

if (num > 100) {
    console.log("positive and greater than 100");
} else if (num > 0 && num <= 100) {
    console.log("positive and less than or equal to 100");
} else if (num === 0) {
    console.log("The number is zero.");
} else {
    console.log("The number is negative.");
}



// Even or Odd

let value = 5

if (value % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

// Authentication System
let role = "viewer";

if (role === "admin") {
    console.log("Welcome");
}
else if (role == "viewer") {
    console.log("just visit");
}
else if (role === "editor") {
    console.log("edit file");
}
else {
    console.log("Error");
}


// Product Stock Management

let pdt = 100;
if (pdt >= 100) {
    console.log("stock avaliable");
}
else if (pdt >= 1 && pdt < 100) {
    console.log("limited pdt")
}
else {
    console.log("empty stock")
}



// Simple Calculator

let C = 5;
let D = 5;
let cal = "*"
if (cal == "+") {
    console.log(C + D);
}
else if (cal == "-") {
    console.log(C - D);
}
else if (cal == "*") {
    console.log(C * D);
}
else if (cal == "/") {
    console.log(C / D);
}
else {
    console.log("click");
}

//Divisible by 2,3 or both
let div = 9;
if (div % 2 == 0 && div % 3 == 0) {
    console.log("divisible by 2,3");
}
else if (div % 3 == 0) {
    console.log("divisible by 3");
}
else if (div % 2 == 0) {
    console.log("divisible by 2");
}
else {
    console.log("none");
}

// Number Comparison
let a = 20;
let b = 30;
if (a == b) {
    console.log("equal value");
}
else if (a > b) {
    console.log("a is greater");
}
else {
    console.log("b is greater")
}

// Traffic Light Simulator

let signal = ""
if (signal === "red") {
    console.log("Stop");
}
else if (signal === "yellow") {
    console.log("wait");
}
else if (signal === "green") {
    console.log("Go");
}
else {
    console.log("off");

}


// Shape Identifier

let sides = "4"
if (sides == 3) {
    console.log("triangle");
}
else if (sides == 4) {
    console.log(" Quadrilateral");
}
else if (sides == 5) {
    console.log("Pentagon");
}
else {
    console.log("default shape");
}