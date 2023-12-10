// NOTE : CODE IS NOT RUNNING JUST FOR LEARNING PURPOSE

//Conditionals - if, else, else if, switch
//1.if
if (condition) {
  // Code to execute if the condition is true
}

// Q. What if we write
//     👇
// if (12){
//   console.log("hey")
// }
// This condition is neither true or false then what will be the output?
// True! because JS had classified already condition mein agar ⬇ values hui toh 
// null, defined , NaN , 0 , "" , '' , document.all , false --> will return false REST WILL RETURN TRUE
// or can be checked boolean("Rajat") or boolean("") -> true false

//2.if else
if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}

// Some code are also written like this and this is also write but there is a catch code must be one line code
if(12>13) console.log("hey");
else console.log("wow");

//3.else if
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if no conditions are true
}

//4.Switch
switch (expression) {
  case value1:
    // Code to execute if expression matches value1
    break;
  case value2:
    // Code to execute if expression matches value2
    break;
  // Add more cases as needed
  default:
  // Code to execute if expression doesn't match any case
}
