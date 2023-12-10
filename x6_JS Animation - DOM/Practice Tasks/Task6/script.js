var home = document.querySelector("#home");
var about = document.querySelector("#about");
var more = document.querySelector("#more");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var moretext = document.querySelector("#moretext");

home.addEventListener("click", function () {
  removetext();
  hometext.style.display = "block";
  hometext.style.width = "50%";
});

about.addEventListener("click", function () {
  removetext();
  abouttext.style.display = "block";
  abouttext.style.width = "50%";
});

more.addEventListener("click", function () {
  removetext();
  moretext.style.display = "block";
  moretext.style.width = "50%";
});

var h3 = document.querySelectorAll("h3");

function removetext() {
  h3.forEach(function (h3) {
    h3.style.display = "none";
  });
}
//We could also make this code more efficient try linking script2.js