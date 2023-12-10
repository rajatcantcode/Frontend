// Scroll trigger used when the animation is on the basis of scrolling
// note : need to use another CDN
gsap.from("#page1 #circle", {
  scale: 0,
  rotate: 360,
  duration: 2,
  delay: 0.5,
  //   **write like this**
  // --> 1.
  //scrollTrigger: "#page1 #circle",
  // --> 2.This is another way to write
  scrollTrigger: {
    trigger: "#page1 #circle",
    scroller: "body",
    // This shows the scrolling range
    markers: true,
    //We could customise when we want to start the animation while scrolling
    start: "top 60%",
    // What is the need of end ? --> in extra property called scrub 👇page2 circle
    end: "top 30%",
  },
});

gsap.from("#page2 #circle", {
  scale: 0,
  rotate: 360,
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#page2 #circle",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    //This allow the element to do animation flow in the way start-end
    //scroll till start - will start the animation
    //scroll till last - will end the animation
    //Animation depends completely depends upon scroll fast scroll = fast animation of object
    scrub: true,
  },
});

gsap.from("#page3 #circle", {
  scale: 0,
  rotate: 360,
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#page2 #circle",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 20%",
    // we could also give it a value the more number we give the more smoother we get the animation between start-end
    scrub: 50,
  },
});
