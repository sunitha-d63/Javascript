// Function to Add Two Numbers
function addNumbers(a,b){
return a+b;
}
console.log(addNumbers(5,3));

// Function with Default Parameters
function greet(name="Guest"){
console.log("Hello,"+ name +"!")
}
greet();

// Arrow Function to Find Square of a Number
const square = (numb) => {
    return numb*numb;
}
console.log(`${square(2)}`);

// Function to Convert Celsius to Fahrenheit
function celciusToFahrenheit(celcius) {
    return celcius*9/5+32;
}
console.log(`${celciusToFahrenheit(20)}`);