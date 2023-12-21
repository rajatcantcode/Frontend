// immutable vs mutable 
//-> Immutable: Unchangeable, values cannot be modified after creation.
//-> Mutable: Changeable, values can be modified after creation.

var arr = [1,2,3,4];
var arr2 = arr;

arr2.pop();
console.log(arr2)
console.log(arr)

//When we are poping the array -> refernce location se element hat rha hain 

//This is a problem with call by reference when we are are copying refenced data value don't get copied only location
//yehi concept ka lena dena hain immutable vs mutable main

//React mein ek 'state' naam ki cheej milegi hum usko mutate nahi kar skte mtlb directly uski value nahi hata skte
//now we need to understand how can we update 'state' immutable way mein?

var state = [1,2,3,4];
//We need to remove last 2 elements
//-------We cannot do this by pop because it's not allowed in React ki hum directly 'state' change kare--------
// state.pop();
// state.pop();
//-------We can only do it in 'immutable' way matlab -> [1,2,3,4] ko change nhi kar skte seedha new value dedo-------
state=[1,2];