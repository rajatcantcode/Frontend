// Closures
// ek function jo return kare dusra function , and use kar rha ho parent fxn ka koi variable
function counter() {
  var count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
var fxn = counter();
fxn(); //<--as we know counter is returning a function

// SPECIAL PART ABOUT THIS FUNCTION: when the code runs on main stack it will get remove in no-time
// AND it will return the fxn  + it will return the variables which are being used in returning fxn like counter = 0

// REASON: When JS read the code line by line it checks whether is there any variable which are being used in returning
//         fxn also
//         if so , it will collect the data in memory and save it till returning fxn is being used

/*------------------------------------------------------------------------------- */
// Another example
function timer() {
  var a = 12;
  return setTimeout(function () {
    console.log(a);
  }, 2000);
}

timer();