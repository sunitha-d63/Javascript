// 1. Create a Simple Object Create an object car with properties make, model, and year. Assign values to these properties and log the object. 
console.log('Task-1')
car = {
    make: "India",
    model: "ford",
    year: 2018
}
console.log(car);

// 2. Access Object Properties Given the object user = { name: "Alice", age: 25, city: "New York" }, access and log each property individually.
console.log((`Task-2`));
user = { name: "Alice", age: 25, city: "New York" }
console.log(user.name);
console.log(user.age);
console.log(user.city);
console.log(user["name"]);
console.log(user["age"]);
console.log(user["city"]);


// 3. Modify Object Properties Start with the object book = { title: "1984", author: "George Orwell" }. Add a year property and update the author property.
console.log((`Task-3`));
book = { title: "1984", author: "George Orwell" }
book.year = 1995;
book.author = "Geo well"
console.log(book);


// 4. Add Methods to Objects Create an object person with properties firstName and lastName. Add a method fullName that returns the full name of the person.
person = {
    firstName: "Sunitha",
    lastName: "vijay",
    fullname: function () {
        return (this.firstName + this.lastName);
    }
}
console.log(person.fullname());
console.log(person['fullname']());