//Destructuring -> Extracting values from objects or arrays into distinct variables for easier use.

var obj = { name: "Rajat", age: 24 };
//we need to use obj age we will use like this
obj.age;
//but in companies we replace it to a value as to write more cleaner code
const { age } = obj;
console.log(age);

//-------------------------------------------------------------------
//Where it becomes so useful

var person = {
  name: "rajat",
  social: {
    facebook: "Rajatop",
    Instagram: "Rajatooo",
  },
};
//person.social.facebook -> This is pretty lengthy if we want to use it again and again
const { facebook } = person.social;
// const {obj ka naam} = voh kiske andar hain
console.log(facebook);

//-------------------------------------------------------------------
var arr = [12, function () {}, "Rajat", "Simba"]; //we don't want rajat
var [first, sec, , fourth] = arr;//We skip third one 

console.log(first); //12
console.log(sec); //fxn
console.log(fourth);//Simba
