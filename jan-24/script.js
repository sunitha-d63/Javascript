// Print the elements of an array

let Name=["viyona","yativin","swetha","sudha"]

for(list of Name)
{
    console.log(list);
    // console.log(typeof list);
}


// Reverse the elements of an array

// Count digits in a number
let numb = [1,2,3,4,5];
for(count of numb)
{
console.log(numb.length);
}

// Sum of digits in a number
let c=[1,2,3,4]
digit=0;

for(const sum of c)
{
    digit+=sum;
}
console.log(digit)


// Print all elements of an object
let details={Name:"AAA",Address:"coimbatore",Number:987678}

for(const information in details)
{
    console.log(information);
}


// fibonacci numbers

let n = 10;
fibonacci=[0,1]
for (let i = 2; i<n; i++)
{
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);
for(fibnumb of fibonacci)
{
    console.log(fibnumb)
}

// Find the minimum number in an array
let b = [5, 12, 8, 13, 4];
let minarray = b[0];  
for(const minimum of b)
{
    if(minimum<minarray){
        minarray=minimum
    }
}
console.log(minarray);

// Find the maximum number in an array
let number=[3,4,6,8,2]

let array=number[0];
for(const maximum of number){
    if(maximum>array){
        array=maximum;
    }
}
console.log(array);