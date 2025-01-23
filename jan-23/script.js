
// Print the elements of an array
let array=[1,2,3,4,5,6]
console.log(array);
console.log(array.length);


// Reverse the elements of an array
let number=[10,11,12,13,14,15]

for(i=number.length-1;i>=0;i--)
{
    console.log(number[i]);
}


// Find the maximum number in an array

let a=[3,4,6,8,2]

let max=a[0];

for (m=1;m<a.length;m++)
{
    if(a[m]>max)
        max=a[m]
}
console.log(max);


// Find the minimum number in an array

let b = [5, 12, 8, 13, 4];
let min = b[0];  
for ( i = 1; i < a.length; i++) {
    if (b[i] < min) {
        min = b[i];  
    }
}
console.log(min);

// Count digits in a number
let digits = [1,2,3,4,5];
console.log(digits.length);


// Sum of digits in a number
let c=[1,2,3,4]
digit=0;

for(s=0;s<c.length;s++)
{
    sum=c[s];
    digit+=c[s];
}
console.log(digit);

// Print all elements of an object

let details={Name:"AAA",Address:"coimbatore",Number:987678}

console.log(Object.entries(details));
// console.log(Object.keys(details));
// console.log(Object.values(details));


// fibonacci numbers
let n = 10;
fibonacci=[0,1]
for (let i = 2; i<n; i++)
{
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);

// Count the number of vowels in a string