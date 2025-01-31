// how would you add "Mango" to the end of the array
console.log(`task-1`)
let fruits = ["Apple", "Banana", "Orange"]
fruits.push("Mango")
console.log(fruits);

// How can you remove "Orange" from the fruits array?
console.log(`task-2`)
let Fruits = ["Apple", "Banana", "Orange"]
Fruits.pop()
console.log(Fruits);

// How would you add "Pineapple" to the beginning of the fruits array?
console.log(`task-3`)
let FruitS = ["Apple", "Banana", "Orange"]
FruitS.unshift("Pineapple")
console.log(FruitS);

// How can you remove "Apple" from the fruits array?
console.log(`task-4`)
let FRUITES = ["Apple", "Banana", "Orange"]
FRUITES.shift()
console.log(FRUITES);

// How would you extract the first two elements from the fruits array? 
console.log(`task-5`)
let FRUITES_1 = ["Apple", "Banana", "Orange"]
let elements=FRUITES_1.slice(0,2)
console.log(elements);


// How can you replace "Banana" with "Strawberry" in the fruits array? 
console.log(`task-6`)
let FRUITEs = ["Apple", "Banana", "Orange"]
FRUITEs[1]="Strawberry"
console.log(FRUITEs);

// How would you reverse the order of elements in the fruits array? 
console.log(`task-7`)
let Fruites_elements = ["Apple", "Banana", "Orange"]
Fruites_elements.reverse()
console.log(Fruites_elements);

// How can you sort the fruits array alphabetically?
console.log(`task-8`)
let fruit_array = ["Apple", "Banana", "Orange"]
fruit_array.sort()
console.log(fruit_array);

// copyWithin
console.log(`task-9`)
let value=["a","b","c","d","e","f","g"]
value.copyWithin(0,3,5);
console.log(value);


// Fill the 0 all Array Elements
console.log(`task-10`)
let Elements = [1, 2, 3, 4,5,6]
Elements.fill(0)
console.log(Elements);



