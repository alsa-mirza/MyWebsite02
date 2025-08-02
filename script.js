console.log("HELLO");

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to(".page1",{
    y:"100vh",
    duration:0,
    scale:0.4
})

tl.to(".page1",{
    y:"15vh",
    duration:1,
    delay:1
})

tl.to(".page1",{
    y:"0vh",
    rotation:360,
    scale:1,
    duration:0.8
})