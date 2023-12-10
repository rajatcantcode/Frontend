//OBJECTS
// - In JavaScript, the `Object` is a in-built constructor function used to create objects.
// It is a fundamental data type in the language.
// - Objects in JavaScript are collections of key-value pairs.
// They can store various data types, including other objects, functions, and primitive values.

//2 Ways of creating objects and more ways are also there..
var obj = {};
var obj2 = new Object();

var human = {
  name: "Rajat",
  age: 18,
  email: "rajatcantcode@gmail.com",
};
console.log(human.name);

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  startEngine: function () {
    console.log("Engine started");
  },
};

console.log(car.brand); // Accessing property using dot notation
console.log(car["model"]); // Accessing property using bracket notation

car.color = "Blue"; // Adding a new property
car.year = 2022; // Modifying an existing property

delete car.year; // Removing a property

car.startEngine(); // Calling a method
/*------------------------------------------------------------------------------- */

// -->Synchronous Code:
// ★Executes one operation at a time.
// ★Waits for each operation to complete before moving to the next.

// -->Asynchronous Code:
// ★Allows multiple operations to overlap.
// ★Doesn't wait for each operation to finish; uses callbacks or promises for handling results.
