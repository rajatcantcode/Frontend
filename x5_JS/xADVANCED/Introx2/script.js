// apply , call , bind
// There are 3 ways function ko call karne ke kisi object ko 'this' maan kar

//1.Call
const obj = { name: "Rajat" };

function abcd() {
  console.log(this);
}
abcd(); //will return window

abcd.call(obj); //{ name: "Rajat" }
abcd.call(12); //we can place any value to 'this' // Number {12}

//2.Apply
//same as call but we just can add more parameters to it
function xyz(a, b, c) {
  console.log(this, a, b, c);
}
//abc.apply(this,[array])
xyz.apply(obj, [1, 2, 3]);//{name: 'Rajat'} 1 2 3

//3.Bind
//same as call -> we don't get answer immediately here
//it returns a new fxn which we can use further
abcd.bind(obj);
const lateruse = abcd.bind(obj);
lateruse();
