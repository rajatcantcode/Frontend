//EVENT DELEGATION
//Jab aap event listener se kai sarre different elements ke events ko handle kar sake

//What to do : event listener ko parent par lagao and unko id, class ya fir tag ke basis par differentiate
//             karke different task karao

//Concept: agar child ke pass listener nhi milta hain toh fir parent par dhoondha jaega

/*1st part-------------------- */
var parent = document.querySelector("#parent");
/*
// we click on child - play and pause but parent's event is running = Event bubbling

parent.addEventListener("click", function (details) {
  console.log(details);
  //details of click is showing on console
});

*/

//Event bubbling:Event starts from target, bubbles up through ancestors.
//               Efficient for handling events on multiple nested elements with a common ancestor.

/*2nd part-------------------- more details */

// We only one listener and using on different elements
parent.addEventListener("click", function (details) {
  if (details.target.id === "play") {
    console.log("play song");
  } else if (details.target.id === "pause") {
    console.log("pause song");
  }
});

