var error = document.querySelector("#error");
var inp = document.querySelectorAll('input[type="text"]');
var form = document.querySelector("form");
// Whenever dealing with form Remember : after submitting the page gets refresh
form.addEventListener("submit", function (reload) {
  reload.preventDefault();//We are using it not allow the page to refresh otherwise the JS won't run
  for (var i = 0; i < inp.length; i++) {
    if (inp[i].value.trim() === "") {
      error.textContent = "Kindly fill all the form";
      error.style.color = "red";
      break;
    } else {
      error.textContent = "";
    }
  }
});







/* THIS THINGS WERE PROBLEM */
/*<----------1-----------> */
// Problem:HERE IF WE WOULD HAVE SO MANY INPUTS THEN WE NEED TO WRITE CODE ALOT
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");

// form.addEventListener("submit", function (ev) {
//   ev.preventDefault();
//   if (inp1.value == "" || inp2.value == "") {
//   }
//   else{

//   }
// });
/*<----------2-----------> */
// Problem: 2 input fields 1st one empty 2nd is filled -> due to 2nd input the error will filled by it as "blank" by the logic of this code
// form.addEventListener("submit", function (reload) {
//   reload.preventDefault();
//   inp.foreach(function (inp) {
//     if (inp.value === "") {
//       error.textContent = "error";
//     } else {
//       error.textContent = "";
//     }
//   });
// });
