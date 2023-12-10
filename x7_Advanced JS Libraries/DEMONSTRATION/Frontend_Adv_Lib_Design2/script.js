function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
}

// ----Code valid for only one element---
// var firsttext = document.querySelector("#text1").textContent;

// var splited = firsttext.split("");//every element will be set apart -> s , e , t ..

// console.log(splited);

// var clutter = ""; //clutter means things put around in an untidy manner
// splited.forEach(function (elem) {
//   clutter += `<span>${elem}</span>`;
// });
// console.log(clutter);

// document.querySelector("#text1").innerHTML = clutter;

// --Code for all h1 tags in one go--
function textSplitting() {
  var allh1 = document.querySelectorAll("#page2 h1");

  allh1.forEach(function (elem) {
    var clutter = "";
    var textElement = elem.textContent;
    var splited = textElement.split("");
    splited.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
    elem.innerHTML = clutter;
  });
}

// animation
function gsapAnimation() {
  gsap.to("#page2 h1 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",//changes here because of locomotive 
      markers: true,
      start: "top 50%",
      end: "top -10%",
      scrub: 1,
    },
  });
}
locomotive();
textSplitting();
gsapAnimation();