//GSAP TIMELINE
// WITHOUT USING DELAY boxes are in sync
var tl = gsap.timeline();
tl.to("#box1",{
    x:1200,
    duration:2,
    scale:0.5,
    rotate:360,
})
tl.to("#box2",{
    x:1200,
    duration:1,
    scale:0.5,
    rotate:360,
})
tl.to("#box3",{
    x:1200,
    duration:0.5,
    scale:0.5,
    rotate:360,
})