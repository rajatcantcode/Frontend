// Window is a collection of tools which browswer offers like alert, DOM and... to use with the help of javascript

// There are many features which are frequently used in JS and they are not the part of JS,
// they are not the part of JS the language but they are available in the browser, and when
// we use them in JS they are called from the browswer
// like console, Alert...

// how to know which features we use from the browser?
// type window on console in browser
/*---------------------------------------------------------------------------------------------- */

// Data Types - Primitive & Non-Primitive aka Reference
// Primitive: Number, String, Boolean, Undefined, Null
// Non-Primitive: Object, Array, Symbol, BigInt

// Primitive Data Types
let num = 42; // Number
let str = "Hello"; // String
let bool = true; // Boolean
let undf; // Undefined
let nll = null; // Null

// Non-Primitive Data Types
let obj = { key: "value" }; // Object
let arr = [1, 2, 3]; // Array
let sym = Symbol("unique"); // Symbol
let bigInt = BigInt("9007199254740991"); // BigInt

//This way on the reference value gets stored in 'b' of 'arr'
//Now b and arr are both reference on same location
var b = arr;
// this will remove the last element of array
arr.pop();
// arr[1,2]            <--
// b[1,2]                |
// But we dont want this ☝🏿 
// we want arr[1,2] or original to stay same

// Copying in array 
// As it's a reference data type
// Spread operator to copy
var array = [1,2,3,4,5];
var a = [...array];
//The whole array has been successfully copied to 'a'
// '...' -> spread
a.pop();
//a = [1,2,3,4]
//array [1,2,3,4,5]
