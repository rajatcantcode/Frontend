//Event Object
//We could track Mouse location X AND Y axis
document
  .querySelector("body")
  //callback fxn can carry details
  .addEventListener("mousemove", function (dets) {
    // We are printing 'moving' to check whether our fxn is working or not
    console.log("moving");
    console.log(dets); //We could see X and Y axis location
  });
//We could make a circle on mousemove - modern websites do built like this
