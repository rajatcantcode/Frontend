var tml = gsap.timeline();

tml.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.7,
    // Without using timeline h3 elements coming down one by one
    stagger:0.3,
})

tml.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.7,
    stagger:0.3,
})

tml.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:3,
    stagger:0.5,
})