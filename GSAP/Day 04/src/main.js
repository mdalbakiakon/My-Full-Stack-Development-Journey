gsap.from(".page1 .box", {
  scale: 0,
  duration: 2,
  rotate: -360,
});

gsap.from(".page2 .box", {
  scale: 0,
  duration: 4,
  rotate: -360,
  // scrollTrigger: ".page2 .box"
  // this is when the page is viewed

  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    markers: false,
    start: "top 20%",
  },
});

gsap.from(".page3 #box", {
  rotate: 360,
  duration: 0.85,
  scrollTrigger: {
    trigger: ".page3 #box",
    scroller: "body",
    start: "top 90%",
    // end: "top 70%",
    markers: false,
    // scrub: true,
    scrub: 2
  },
});

gsap.to(".page3 #box", {
  borderRadius: "50%",
  duration: 0.85,
  scrollTrigger: {
    trigger: ".page3 #box",
    scroller: "body",
    markers: false,
    // scrub: true,
    scrub: 2
    // 1-5 make smoother scrub
  },
});



let tl = gsap.timeline()
// pin
tl.to(".page0 h1", {
    transform: "translateX(-85%)",
    // ease:"power2.inOut",
    scrollTrigger:{
        trigger: ".page0", //in using pin we must trigger only the parents not the element
        scroller: "body",
        markers: false,
        start: "top 0%",
        end: "top -250%",
        scrub: 2,
        pin: true
    }
})


tl.from(".page4 h1", {
  opacity: 0,
//   duration: 0.8,
  stagger: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    markers: false,
    start: "top 95%",
    scrub: 2
  },
});