// LOOPS
// - for, do..while, while, for..in, for..of,for..each
// Important loops - Majority - for, do..while,foreach
// - break/continue-labelled statements to enhance loop functionality

/*
1.
for (initialization; condition; iteration) {
  // Code to be executed repeatedly
}
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*
2.
while (condition) {
  // Code to be executed repeatedly
}
*/

let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

/*
3.
do {
  // Code to be executed repeatedly
} while (condition)
*/
let x = 0;
do {
  console.log(x);
  x++;
} while (x < 5);

/* 
4.
for (let key in object) {
  // Code to work with object[key]
}
*/
const person = {
  name: "John",
  age: 30,
  job: "Developer",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

/* 
5.
for (let element of iterable) {
  // Code to work with element
}
*/
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

/*
7.For-Each Loop
*/
const fruits2 = ["apple", "banana", "cherry"];

fruits2.forEach(function(fruit) {
  console.log(fruit);
});


/*
6.Break Statement
*/
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

