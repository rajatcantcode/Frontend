//how to do actual copy an array (without referencing) -> spread or change IMMUTABLY

var state = [1, 2, 3, 4, 5];
var copy = [...state]; //<--[... jise copy karna hain uska naam]spread operator

var state_obj = { name: "Rajat", age: 24 };
//Step1: Copy the object
var copy_obj = { ...state_obj };
//Step:2 Whatever you want to change do in copied
copy_obj.name = "Simba";
// if we want to update state_obj we cant do direct update but we can do this
//Step:3 old array = new array 
state_obj = copy_obj;//both are simba now 
