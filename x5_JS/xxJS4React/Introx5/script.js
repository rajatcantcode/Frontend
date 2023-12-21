//Arrow function (implicit return)

//----->Fat arrow fxn
const abcd = () => {};

//----->Fat arrow fxn with one parameter NO NEED TO WRITE () or can write
const xyz = val => {
  console.log(val);
};
console.log(12); //return -> 12

//----->Fat arrow fxn with implicit return
const azy = val => 13;
// Without using bracket{} returning if we use brackets and want to return then
// const azy = val => {
//     return 13;
// }
// ;
console.log(azy());

//----->Fat arrow fxn with implicit return for OBJECT!
const rajat = val =>({name:"Raat"});//put the object in curly bracket
console.log(rajat());

