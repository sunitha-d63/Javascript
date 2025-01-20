// Leap Year Checker
let Year = 2008;
if ((Year % 4 == 0) && (Year % 100 != 0))
    console.log("Leap Year");
else if (Year % 400 == 0)
    console.log("Leap year")
else
    console.log("not leap year");

// Calculate simple interest

let P = 2000
let R = 5
let T = 8
let amount = (P * R * T) / 100
if (amount < 10000) {
    console.log("int 10%");
}
else if (amount > 30000 && amount < 10000) {
    console.log("int 7%");
}
else if (amount > 50000 && amount < 30000) {
    console.log("int 5%");
}
else if (amount >= 50000) {
    console.log("int 3%");
}
else{
    console.log("none");
}


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
let num=102;

if (num > 100) {
    console.log("positive and greater than 100");
} else if (num > 0 && num <= 100) {
    console.log("positive and less than or equal to 100");
} else if (num === 0) {
    console.log("The number is zero.");
} else {
    console.log("The number is negative.");
}


// Discount Calculator

let purchase=6000;

if(purchase>5000)
{
    console.log("20% discount");
}
else if(purchase>5000 && purchase<2000)
{
    console.log("10% discount");
}
else if(purchase<2000)
{
    console.log("No discount");
}
else
{
    console.log("none")
}

// Even or Odd

let value = 5

if(value % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

// Authentication System
let role="viewer";

if(role==="admin")
{
    console.log("Welcome");
}
else if(role=="viewer")
{
    console.log("just visit");
}
else if(role==="editor")
{
    console.log("edit file");
}
else{
    console.log("Error");
}


// Product Stock Management

let pdt=100;
if(pdt>=100)
{
    console.log("stock avaliable");
}
else if(pdt>=1 && pdt<100)
{
    console.log("limited pdt")
}
else{
    console.log("empty stock")
}

// Calculate Tax
let salary = 500000;
if(salary>=100000 && salary<=200000){
    console.log("10% tax");
}
else if(salary>=300000 && salary<=400000){
    console.log("15% tax");
}
else if(salary>=500000 && salary<=600000){
    console.log("20% tax");
}
else{
    console.log("No tax");  
}

// Simple Calculator

let C=5;
let D=5;
let cal="*"
if(cal=="+"){
    console.log(C+D);  
}
else if(cal=="-"){
    console.log(C-D);
}
else if(cal=="*"){
    console.log(C*D);
}
else if(cal=="/"){
    console.log(C/D);
}
else{
    console.log("click");
}

//Divisible by 2,3 or both
let div = 9;
if(div%2==0 && div%3==0){
    console.log("divisible by 2,3");
}
else if(div%3==0){
    console.log("divisible by 3");
}
else if(div%2==0){
    console.log("divisible by 2");
}
else{
    console.log("none");
}

// Number Comparison
let a=20;
let b=30;
if(a==b)
{
    console.log("equal value");
}
else if(a>b)
{
console.log("a is greater");
}
else{
    console.log("b is greater")
}

// Traffic Light Simulator

let signal=""
if(signal==="red")
    {
    console.log("Stop");
}
else if(signal==="yellow")
    {
    console.log("wait");
}
else if(signal==="green")
    {
    console.log("Go");
}
else{
    console.log("off");
    
}


// Shape Identifier

let sides = "4"
if(sides==3){
    console.log("triangle");
}
else if(sides==4){
    console.log(" Quadrilateral");
}
else if(sides==5){
    console.log("Pentagon");
}
else{
    console.log("default shape");
}