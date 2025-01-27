//------------------------ Function declearation


// Add Two Numbers
console.log(`task-1`)
// let a=2;
// let b=3
function add(a,b)
{
    console.log(a+b)
}
add(2,3)

// Check Even or Odd
console.log(`task-2`)

let number=5

function check(number){
    if(number%2==0){
        return("even number");
    }
    else{
        return("odd number")
    }
}
console.log(check())

// Find the Maximum of Two Number

console.log(`task-3`)
function Maximum(c, d) {
    if (c > d) {
      return c;
    } else {
      return d;
    }
  }
  console.log(Maximum(5,8))


//   Find the Minimun of Two Number

console.log(`task-4`)
function Mininumb(c, d) {
    if (c < d) {
      return c;
    } else {
      return d;
    }
  }
  console.log(Mininumb(5,8))

  // Function to Concatenate Strings
  console.log(`task-5`)
  let fName = "viyona";
  let lName = "saisha";
  
  function name(){
    console.log("fname+lname")
  }
  let fullName = `${fName} ${lName}`;
  console.log(fullName);


  // Write a Function to Find the Length of an Array
console.log(`task-6`)

const Array = [1, 2, 3, 4, 5];
console.log(Array.length)


//   Function to Calculate Factorial
console.log(`task-7`)
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));


// Function to Convert Celsius to Fahrenheit
console.log(`task-8`)

// T(°F) = T(°C) × 9/5 + 32 ---Celsius Scale to the Fahrenheit Scale
function celcToFahr( n ) {
  return ((n * 9.0 / 5.0) + 32.0);
}
const n = 24;
console.log(celcToFahr( n ));

//--------------------------- Arrow function


// Add Two Numbers
console.log(`task-9`)
n1=4
n2=5
const addvalues=(n1,n2)=>n1+n2
const sum=addvalues(n1,n2)
console.log(sum);


// Check Even or Odd
console.log(`task-10`)
const evenorodd = num => num % 2 === 0 ? 'Even' : 'Odd';

console.log(evenorodd(4));  
console.log(evenorodd(7));  

 // Write a Function to Find the Length of an Array
 console.log(`task-11`)

const array=()=>
{
  console.log(["yatvin","viyona"])
}
array(array.length)

// Function to Calculate Factorial
console.log(`task-12`)
const factorialnumb = n => (n === 0 || n === 1) ? 1 : n * factorial(n - 1);

console.log(factorialnumb(5));

// Write a Function to Find the Maximum of Two Number
console.log(`task-13`)
const Max = (a, b) => (a > b ? a : b);
console.log(Max(15, 26));


// Write a Function to Find the Minimum of Two Number
console.log(`task-14`)

// const Minimum = (a, b) => (a < b ? a : b);
// console.log(Minimum(15, 26));

const Minimum = (a, b) =>{
  return  (a < b ? a : b);
}
console.log(Minimum(15, 26));

// Function to Concatenate Strings
console.log(`task-15`)
const concatenate = (str1, str2) => {
  return(`${str1}${str2}`);
}
const result = concatenate("viyona ","saisha");
console.log(result);

// const concatenate = (str1, str2) => `${str1}${str2}`;

// const result = concatenate("priya ", "dharshini");
// console.log(result);


// Function to Convert Celsius to Fahrenheit
console.log(`task-16`)

const celc = (cn) =>
  `${cn} Celsius is equal to ${(cn * 9 / 5) + 32} Fahrenheit.`;

const cn = 40;
console.log(celc(cn));

