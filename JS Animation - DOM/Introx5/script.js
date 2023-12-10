// Event Handling : the process of capturing and responding to events, such as user actions or browser events
var btn = document.querySelector("button");
// btn.addEventListener(event,callback matlab ->fxn)

//"dblclick"== when we double click on button then fxn will run
//"mouseover"== hover mouse 
btn.addEventListener("click", function () {
  //Changing the text after click
  btn.textContent = "Downloading..";
  btn.style.backgroundColor = "red";
});
//"mouseleave"
btn.addEventListener("mouseleave", function () {
    //Changing the text after click
    btn.textContent = "New Card Created";
    btn.style.backgroundColor = "green";
  });
  //ChatGPT for more to addEventListener
  