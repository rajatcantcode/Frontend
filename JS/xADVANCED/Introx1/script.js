//'this' keyword is the most suspensful keyword in JS
//'this' value gets changed according to the conditions , if we learn about all conditions then we be able to understand 'this' keyword

//Condtions:
//1★global scope-> window
console.log(this); //will return just window

//2★function->window
function abcd() {
  console.log(this);
}
abcd();
1;
//3★method->object
//Aisa fxn jo obj ke ander ho = method
var obj = {
  name: function () {
    //this is name function
    console.log(this.naam);
  },
  age: 25,
  naam: "Rajat",
};
obj.name();

//4★fxn inside method(es5 variant)->window
// we don't use the arrow function because it was not introduced till then
var obj2 = {
  sayName: function () {
    console.log(this.age); //refer object thus we can access age
    function childfxn() {
      console.log(this.name); //refer window we cannot access any property
      //this upper line results in '   ' <- blank in console
      console.log(this); //refer window
      name: "Rajat";
    }
    childfxn();
  },
  age: 25,
};
obj2.sayName();

//5★fxn inside method(es6 variant)->object
// We use arrow function because it's a part of es6
var obj3 = {
  sayName: function () {
    const child = () => {
      console.log(this);
    };
    child(); //{sayName: ƒ}👇refer
  },
};
obj3.sayName();

/* ❌CRAZY THING */
//ARROW FUNCTION KA EASY FUNDA , IT SAYS 'this' ki value parent se lo

var obj4 = {
  //obj4 is just in global scope = will return window
  sayName: () => {
    //this will take value from it's parent- obj4
    console.log(this);
  },
};
obj4.sayName();
//BUT @5 we talk about fxn inside mthod -> object CONTRADICTS!!
// note: OBJECT KE ANDAR ALWAYS USE NORMAL FUNCTION fir USKE ANDAR USE KARE ARROW FUNCTION like @5

//6★constructor fxn mein 'this' ki value->new empty object
function add() {
  console.log(this);
}
new add(); //returns blank object

//7★Event listener mein this ki value->that element jispar event listener laga ho
//PART OF DOM
document.querySelector("button").addEventListener("click", function () {
  //button element hain <-'this' is par point kar raha hain
  console.log(this);
});
