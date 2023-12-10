//more efficient code 
var tabs = document.querySelectorAll(".tab");
var text = document.querySelectorAll("h3");

text[0].style.display = "block";
text[0].style.width = "50%";

tabs.forEach(function (tabs, index) {
  tabs.addEventListener("click", function () {
    hideAllText();
    text[index].style.display = "block";
    text[index].style.width = "50%";
  });
});

function hideAllText() {
  text.forEach(function (h3) {
    h3.style.display = "none";
  });
}
