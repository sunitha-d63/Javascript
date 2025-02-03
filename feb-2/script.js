//  Given the fruits array, how would you find the position of "Banana"
console.log(`task-1`);

let fruits=["Apple","Banana","orange","Grapes","Mango"]
position=fruits.indexOf("Banana")
console.log(position);


// How can you check if "Grapes" is in the fruits array? 
console.log(`task-2`);

check=fruits.includes("Grapes")
console.log(check);


// How would you create a shallow copy of the fruits array? 
console.log(`task-3`);

copy=fruits.slice()
console.log(copy);


// How can you combine the fruits array with another array ["ClusterApple", "Kiwi"]?
console.log(`task-4`);

combine=fruits.concat("Kiwi","ClusterApple")
console.log(combine);


// How would you extract the first two elements from the fruits array?
console.log(`task-5`);

extract=fruits.slice(0,2)
console.log(extract);

// How can you filter out fruits that do not contain the letter "a" from the fruits array?
console.log(`task-6`);
let letter = fruits.filter((fruit) => {
    return fruit.includes('a')});
console.log(letter);


// How would you iterate over the fruits array and print each fruit using forEach()? 
console.log(`task-7`);

fruits.forEach((fruit)=>{
console.log(fruit);

});


// How can you check if every fruit name in the fruits array has more than 3 characters? 
console.log(`task-8`);
 
characters=fruits.every(fruit=>{
   return fruit.length>3;
})
console.log(characters);


// How would you find the first fruit in the fruits array that starts with the letter "O"? 
console.log(`task-9`);

letter=fruits.find(fruit=>{
    return fruit.startsWith("o")
})
console.log(letter);


// How can you join all the elements of the fruits array into a single string separated by commas?
console.log(`task-10`);

console.log(fruits.join(","));

// How would you remove the second element ("Banana") from the fruits array?
console.log(`task-11`);

let remove=fruits.splice(1,1);
console.log(remove);
