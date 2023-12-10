// Functions
//es5 -> 3 types -> function statements, functions expressions , anonymous function
//es6 -> fat arrow function -> 3 types -> basic fat arrow
//                                     -> fat arrow with one param
//                                     -> fat arrow with implicit return

/*------------------------------------------------------------------------------------- */

// JS mein function normal programming language jaise nhi hain , mtlb, funtions banane ke liye type
// nahi batana padhta
// like in java we use
// public static void <--no need to write all this :)
// bus humme function word likhna padega aur use koi naam deke bana skte hain

/*------------------------------------------------------------------------------------- */

//Basic Structure
function abcd(param) {
  // it's not necessary to place param , without param bhi chalega
}
abcd();

/*------------------------------------------------------------------------------------- */
// Indepth : JS mein function first class functions ka darja diya gaya hain,
//           jiska matlab JS mein functions ko value/variable ki tarah treat kara ja skta hain

// Extra to know:parameters and arguments
function abcd2(numbertoadd) /*<--parameter*/ {
  // it's not necessary to place param , without param bhi chalega
  console.log(numbertoadd + 2); //14
}
abcd2(12);
//   ☝🏿argument
// argument jaega parameter mein

/*------------------------------------------------------------------------------------- */

//PREPARATION FOR INTERVIEW
// Q.ALL 6 TYPES OF FUNCTIONS
function a() {
  //1.function statement
}
var bro = function() {//<--Note function don't have name**
  //2.function expression
}
function(a){
  //3.annonymous function
}

// -->Fat arrow function
()=>{

}
// This can be saved also in a variable
var t = ()=>{

}
// This have 3 types 
//1.basic fat arrow
var u = ()=>{}//just like the upper one

//2.fat arrow with one param
var k = (weight)=>{}
k(12)
// As only single parameter is there we can also remove fat in this function
var k = weight =>{}
k(12)
// Both are correct

//3.fat arrow with implicit return
var xyz = () => "Rajat";
// 'Rajat' return ho jayega
var ans = xyz();
