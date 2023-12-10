//DOM
//What ever we write inside the body tag, do show on the website
//In HTML we don't have any feature ki hum ek button click ko handle kar ske
//DOM is nothing but HTML tag but control is in the hands of JS :)

// This can create everything
// 'usse ye kardo ye hone par'
// 'usse'->selection
// 'ye kardo'->change
// 'ye hone par' ->event

/*Accessing Elements */
//Selection
//There are multiple ways to select the element
document.getElementById;
document.getElementsByClassName;
document.getElementsByTagName;
//All 3 ways are good but there is a 1 way which can replace all 3

var btn = document.querySelector("button"); //single quoted is important*

//selection of element of HTML in JS -> id,class,tag like in CSS
//id
var abcd = document.querySelector("#abcd");
//class
var xyz = document.querySelector(".abcd");
//tag
var h3 = document.querySelector("h3"); //1
//NOTE: IF WE SELECT SO MANY H3 TOH SIRF PEHLA WALA SELECT HOGA while
//IN CSS IT DO SELECTS ALL
//h3{
// }
var h3all = document.querySelectorAll("h3");
//This eneables to select all h3 tags