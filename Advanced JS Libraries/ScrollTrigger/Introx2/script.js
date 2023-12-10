gsap.to("#page2 img", {
  width: "100%",
  scrollTrigger: {
    // Note: When ever we are using the PIN element make sure to trigger it's parent element
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    //Animation khatam ho jayega jab -100% par pahuchage img toh
    end: "top -100%",
    //scrolling pe width movement ho raha tha picture pe
    scrub: 2,
    //ise scroller picture pe rahega or we can say page pin hojayega
    //and we could see the whole picture increasing it's width while scrolling in static mode
    pin: true,
  },
});
