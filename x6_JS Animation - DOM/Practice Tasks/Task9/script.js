var textarea = document.querySelector("textarea");
var number = document.querySelector("span");

textarea.addEventListener("input", function () {
  number.textContent = textarea.value.length;
});
