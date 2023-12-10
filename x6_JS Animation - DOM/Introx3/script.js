// Manipulating styles and classes

//style
var text = document.querySelector("h1");
// Change CSS of any element
text.style.color = "red";
text.style.fontFamily = "Gilroy";
text.style.fontSize = "16px";

//classes
var text2 = document.querySelector("h2");
text2.classList.add("makeitblue"); //make sure not to use '.makeitred' because it's a class we already had defined it as class
text2.classList.remove("makeitblue");
