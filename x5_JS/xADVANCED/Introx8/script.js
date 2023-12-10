//Custom events
//events -> click , doubleclick, mourseover....
//Custom events -> We create events by ourselves

//Q.how to make custom events
//create new event
//attach to some DOM element
//dispatch that event from that DOM element (in which you attack the event)

const evt = new Event("chacha");
document.querySelector("button").addEventListener("chacha", function () {
  alert("chacha event hua");
});

document.querySelector("button").dispatchEvent(evt);

//Q.why to make custom events
//This helps in to write cleaner code
