var timer = document.querySelector("h3");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");

var int;
start.addEventListener("click", function () {
  var counter = 0;
  int = setInterval(function () {
    //we put the fxn in variable in order to use it in stop fxn
    timer.textContent = counter;
    counter++;
  }, 1000);
});

// SetInterval - fxn
// setInterval(callback, timer)->(function(){},ms)->1000ms = 1s

stop.addEventListener("click", function () {
  clearInterval(int);
  //clearInterval stops a function from being repeatedly executed at specified intervals using setInterval.
});
