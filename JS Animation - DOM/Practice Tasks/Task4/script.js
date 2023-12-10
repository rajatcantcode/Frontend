var ul = document.querySelector("ul");
var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");

var li;

var liArray = []; // Array to store created li elements

add.addEventListener("click", function () {
  if (inp.value.trim() === "") {
  } else {
    li = document.createElement("li");
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = ""; //Reset the value to space
    liArray.push(li); // Add the created li to the array
  }
});

remove.addEventListener("click", function () {
  if (liArray.length > 0) {
    var removedLi = liArray.pop(); // Remove the last li from the array
    ul.removeChild(removedLi); // Remove the corresponding li from the DOM
  }
});
