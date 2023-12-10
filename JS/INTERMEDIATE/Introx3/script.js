// Arrays
var users = ["Rajat", "Monkey", "Simba", "Dog", "Human"];
var arr = [1, [3], function () {}, "hello"];
// can even put function or array
console.log(arr[2]); //ƒ (){}
console.log(arr[1]); //[3]

//add all elements of array

var array = [1, 2, 3, 4, 5];
//For each loop
array.forEach(function (i) {
  console.log(i);
})
