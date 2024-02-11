//setTimeout
setTimeout(function () {}, 1000);

//how it's going to work in stacks?

console.log("hey 1");
console.log("hey 2");
console;
setTimeout(function () {
  console.log("hey 3");
}, 0);
console.log("hey 4");
// will be print like this
// hey 1
// hey 2
// hey 4
// hey 3

// But why?
// As JS Engine going to spot setTimeout and will move to sidestack
// Till main stack gets empty our event loop will not move our setTimeout

//setInterval
setInterval(function () {
  console.log("hey");
}, 1000);
clearInterval(); //to stop it

// Problem :  we need to stop the setInterval
// but if we write clearInterval just after that
// it will stop as it is will not print anything

// To get it print and stop after a set period of time
// We need to put setInterval in a variable and can put clearInterval() inside it

var count = 1;
const rajatHero = setInterval(() => {
  ++count;
  console.log(count);
  if (count === 5) {
    clearInterval(rajatHero);
  }
}, 1000);
