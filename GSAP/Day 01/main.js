gsap.to(".box", {
    x: 500,
    duration: 2,
    delay: 1,
    repeat: -1,
    //repeat -1 means infinit time
    backgroundColor: "white",
    borderRadius: "50%",
    rotate: 360,
    yoyo: true
    // yoyo use for reverse
    //! for yoyo we must use repeat
})

// gsap.from(".box", {
//     y: 500,
//     // repeat: -1,
//     duration: 2,
//     delay: 1,
// })


gsap.from("h1",{
    // y: 100,
    // repeat: -1,
    duration: 1,
    delay: 1,
    opacity: 0,
    // stagger: 0.4,
    // stagger: time 
    stagger: -0.5
})


let tl = gsap.timeline()

tl.to(".box1", {
    x: 500,
    duration: 1.5,
    delay: 1,
    repeat: 1,
    yoyo: true,
})

tl.to(".box2", {
    x:500,
    duration: 1,
    repeat: 1,
    yoyo: true,
})

tl.to(".box3", {
    x: 500,
    duration: 0.5,
    repeat: 1,
    yoyo: true,
})