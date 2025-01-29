// Function to Add Two Numbers
console.log(`task-1`);

function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 3));

// Function with Default Parameters
console.log(`task-2`);
function greet(name = "Guest") {
    console.log("Hello," + name + "!")
}
greet();

// Arrow Function to Find Square of a Number
console.log(`task-3`);
const square = (numb) => {
    return numb * numb;
}
console.log(`${square(2)}`);

// Function to Convert Celsius to Fahrenheit
console.log(`task-4`);
function celciusToFahrenheit(celcius) {
    return celcius * 9 / 5 + 32;
}
console.log(`${celciusToFahrenheit(20)}`);

// Largest of Three Numbers
console.log(`task-5`);
function findLargest(a, b, c) {
    if (a >= b && a <= c) {
        return a;
    }
    else if (b >= a && b <= c) {
        return b;
    }
    else {
        return c;
    }
}
console.log(findLargest(5, 10, 20))


// Calculate the Area of a Circle
// Formula: Area = π * radius^2
// π  is a constant approximately equal to 3.14159

console.log(`task-6_Area of circle`);
function calculateCircleArea(radius) {
    // return 3.14 * radius ^ 2;
    return 3.14 * radius ** 2;
}
console.log(`${calculateCircleArea(6)}`);


// Function Using Callback
console.log(`task-7`);

let a = 5
let b = 3

function performOperation(first, second, third, four) {
    first();
    second();
    third();
    four();

}
function add() {
    console.log(`${a+b}`);
}
function sub() {
    console.log(`${a-b}`);
}
function mul() {
    console.log(`${a * b}`);
}
function div() {
    console.log(`${a / b}`);
}
performOperation(add, sub, mul, div)