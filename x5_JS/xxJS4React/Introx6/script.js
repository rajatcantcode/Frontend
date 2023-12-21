//Map , Filter - Both runs on array and "both have to return a new array".

//Map
// Purpose: Transforms each element in an array.
const arr = [1, 2, 3];

// Basic Syntax for map
// arr.map((val) => {
//   return val * 2;
// });

// ******IMPORTANT*****-> As we only have one parameter and returning only one value we know we can also write like this
//Reference -> fat arrow fxn (impolicit retur)
const newarray = arr.map((val) => val * 2);
console.log(newarray); //ONLY WILL RUN ON NEW ARRAY

//--------------------------------------------------------------

//Filter
// Purpose: Creates a new array with elements that pass a condition.
//We only want numbers who can divide by 2
const arr2 = [1, 2, 3, 4];

// arr2.filter((num) => {
//   return num % 2 === 0;
// });
const newarray2 = arr2.filter((val) => val % 2 != 1);

console.log(newarray2);

// ******IMPORTANT*****->
//Why?
//these both are important because if we want to change something in "state" then we need to write like this
var state = [1, 2, 3, 4, 5];
//need to add 1 to every element
var copy = [...state];
copy[0] = copy[0] + 1;
copy[1] = copy[1] + 1;
copy[2] = copy[2] + 1;
copy[3] = copy[3] + 1;
copy[4] = copy[4] + 1;
state = copy;
console.log(state);

var replica = state.map((elem) => elem + 1);
console.log(replica);
// Example: We can also use Map like this
// We want to add 5 on number bigger then 10
var numbers = [11, 22, 23, 2, 1, 1, 2, 121];
var x = numbers.map((elem) => (elem > 10 ? elem + 5 : elem));
console.log(x); //[16, 27, 28, 2, 1, 1, 2, 126]

// Example: We can also use Filter like this
//We want only male genders
var person = [
  {
    name: "Rajat",
    gender: "male",
  },
  {
    name: "Raju",
    gender: "male",
  },
  {
    name: "Rajatiya",
    gender: "female",
  },
];
var y = person.filter(elem => elem.gender ==="male");
console.log(y);