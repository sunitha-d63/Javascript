// 1. Use Object.create() Create a base object shape = { color: "blue" }. Use Object.create() to create a new object circle with a radius property, inheriting color from shape.

shape = { color: "blue" }

const circle=Object.create(shape)
circle.radius=10
console.log(circle.radius);
console.log(circle.color);

// 2. Iterate Over Object Properties Given the object student = { name: "John", grade: "A", age: 20 }, use a for...in loop to log all properties and their values. 

student = { name: "John", grade: "A", age: 20 }

for(const list in student){
    console.log(`${list}:${student[list]}`);
    
}

// 3. Delete Object Properties Create an object movie = { title: "Inception", director: "Nolan", year: 2010 }. Delete the director property and log the updated object.

movie = { title: "Inception", director: "Nolan", year: 2010 }
delete movie.director

console.log(movie);


// 4. Check for Property Existence Given the object employee = { id: 123, name: "Alice" }, check if the property name exists in the object and log the result.

employee = { id: 123, name: "Alice" }
console.log('id' in employee);

// 5 . Merge Objects Create two objects address = { city: "San Francisco", state: "CA" } and contact = { phone: "123-456-7890", email: "example@example.com" }. Merge them into a new object profile.

address = { city: "San Francisco", state: "CA" }
contact = { phone: "123-456-7890", email: "example@example.com" }

const result=Object.assign(address,contact)
console.log(result);

// 6. Object Constructor Write a constructor function Person(name, age) that creates objects with name and age properties. Create two instances and log them. 
function Person(name, age){
    this.name=name
    this.age=age
}

let first= new Person("swetha",23)
let second=new Person("sudha",30)
console.log(first);
console.log(second);


// 7. Add a Property Using Bracket Notation Given the object car = { make: "Toyota" }, add a model property using bracket notation and assign a value to it. 

let car = { make: "Toyota" }
car['model']='forturer'
console.log(car);



// 8. Clone an Object Given the object original = { key: "value" }, create a shallow copy of this object using Object.assign() and log the copy. 

original = { key: "value" }

let copy=Object.assign(original)

console.log(copy);


// 9. Use Object.keys() to List Properties Create an object user = { name: "Bob", age: 30, occupation: "Developer" }. Use Object.keys() to get an array of property names and log it. 

user = { name: "Bob", age: 30, occupation: "Developer" }

console.log(Object.keys(user));


// 10. Define a Read-Only Property Create an object settings = { theme: "dark" }. Define a read-only property version with the value "1.0" using Object.defineProperty(). 

settings = { theme: "dark" }

 Object.defineProperty(settings,"version",{
    value :"1.0"

 });
 console.log(settings.version);

 Object.freeze(settings)

 
 // 11. Add and Remove Methods Create an object calculator with a method add that adds two numbers. Later, remove the add method from the object and verify it. 

 const calculator={
    add(a,b){
        return a+b
    }
 }
 console.log(calculator.add(2,3));

 delete calculator.add;
 console.log(calculator.add);
 
 
// 12. Create Nested Objects Create an object library with a property books that is an array of objects, each representing a book with title and author. 

const library={
    books:[
        {subject:"English", std:10},
        {subject:"Tamil", std:9}    
        
    ]
};

console.log(library.books);


// 13. Use a Prototype Method Create a base object animal with a method makeSound. Create a dog object that inherits from animal and override makeSound to log "Woof!". 

const animal = {
    makeSound: function() {
    console.log("Some generic sound");
    }
   };
   
  const dog = Object.create(animal);

  dog.makeSound = function() {
    console.log("Woof!");
  };

dog.makeSound(); 

// 14. Use Object.values() Given the object student = { name: "Alice", grade: "A", age: 21 }, use Object.values() to get an array of values and log it.

student = { name: "Alice", grade: "A", age: 21 }

console.log(Object.values(student));
