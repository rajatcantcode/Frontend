// GREEN SOCK ANIMATION PLATFORM - open source
// GSAP used to do moving animation
// There are two main ways animation can be done via GSAP
// 1.initial --> final
// gsap.to(element,object);
gsap.to("#box", {
  x: 1000,
  rotate: 360,
  backgroundColor: "blue",
  duration: 2, //2seconds
  delay: 1,
});
//2. initial <-- final
gsap.from("#box", {
  x: 1000,
  rotate: 360,
  backgroundColor: "blue",
  duration: 2, //2seconds
  delay: 1,
});
