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
function lenght(){

const Array = [1, 2, 3, 4, 5];
console.log(Array.length)
}
lenght()


//   Function to Calculate Factorial
console.log(`task-7`)
function factorial(n) {
 num=1
 for(f=1;f<=n;f++)
  {
      num=num*f;
  
  }
  console.log(`${num}`);
}
factorial(5)

// Function to Reverse a String
console.log(`task-8`)
function reversestring(){
  let stringValue = ["R","E","V","E","R","S","E"];
  for(s=stringValue.length-1;s>=0;s--){
      string = stringValue[s]
      console.log(`${string}`);
  }
}
reversestring()

// Function to Convert Celsius to Fahrenheit
console.log(`task-9`)

// T(°F) = T(°C) × 9/5 + 32 ---Celsius Scale to the Fahrenheit Scale
function celcToFahr( n ) {
  return ((n * 9.0 / 5.0) + 32.0);
}
const n = 24;
console.log(celcToFahr( n ));
// console.log(celcToFahr( 24 ));

// Function to Filter Even Numbers from an Array
console.log(`task-10`)
function evenfilter(){
let even=[1,2,3,4,5,6,7,8,9,10];
for(const filternumb of even){
  if(filternumb%2==0){
    console.log(`${filternumb}`)
  }
}
}
evenfilter()



//--------------------------- Arrow function


// Add Two Numbers
console.log(`task-11`)
const addval=(A,B)=>{
  console.log(A+B)
}
addval(10,5)


// Check Even or Odd
console.log(`task-12`)
const evenorodd=(value) =>{
  if(value%2==0){
    console.log(`number is even`)
  }
  else{
console.log(`number is odd`)
  }
}
evenorodd(5)

 // Write a Function to Find the Length of an Array
 console.log(`task-13`)

const array=()=>
{
  console.log(["yatvin","viyona"])
}
array(array.length)

// Function to Calculate Factorial
console.log(`task-14`)
const factorialnum=(n)=>
{
  num=1
  for(f=1;f<=n;f++)
  {
    num*=f
  }
  console.log(`${num}`)
}
factorialnum(5)

// Write a Function to Find the Maximum of Two Number
console.log(`task-15`)
const Max = (a, b) => (a > b ? a : b);
console.log(Max(80, 26));


// Write a Function to Find the Minimum of Two Number
console.log(`task-16`)
const Minimum = (a, b) =>{
  return  (a < b ? a : b);
}
console.log(Minimum(13, 26));

// Function to Concatenate Strings
console.log(`task-17`)
const concatenate = (str1, str2) => {
  return(`${str1}${str2}`);
}
const result = concatenate("viyona ","saisha");
console.log(result);

// Function to Convert Celsius to Fahrenheit
console.log(`task-18`)

const celc = (cn) =>
  `${cn} Celsius is equal to ${(cn * 9 / 5) + 32} Fahrenheit.`;

const cn = 40;
console.log(celc(cn));

// Function to Reverse a String
console.log(`task-19`)


const reverse = () =>{
  let string = ["S","T","R","I","N","G"];
  for(s=string.length-1;s>=0;s--){
      Strvalue = string[s]
      console.log(`${Strvalue}`);
  }
}
reverse()

// Function to Filter Even Numbers from an Array
console.log(`task-20`)

const Filter=()=>{
  let Evennumb=[1,2,3,4,5,6,7,8,9,10];
  for(const evenfilt of Evennumb){
    if(evenfilt%2==0){
      console.log(`${evenfilt}`)
    }
  }
}
Filter()
