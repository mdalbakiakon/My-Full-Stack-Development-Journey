gsap.registerPlugin(ScrollTrigger)

// Initialize Lenis with better compatibility settings
const lenis = new Lenis({
    duration: 1.25,
    smoothWheel: true,
    smoothTouch: false, // Better for mobile
    touchMultiplier: 1.25, // Smoother touch scrolling
})

// Improved RAF loop
function raf(time) {
    lenis.raf(time)
    ScrollTrigger.update() // Double ensure ScrollTrigger knows about scroll changes
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Sync Lenis + ScrollTrigger
lenis.on("scroll", ScrollTrigger.update)




let main_path = `M 2 2.5 Q 13 2.5 28 2.5`
let trial_path = `M 2 2.5 Q 13 2.5 28 2.5`

let svg_cont = document.querySelector(".svg-container")

svg_cont.addEventListener("mousemove", (e) => {

    let rect = svg_cont.getBoundingClientRect();
    let svgX = ((e.clientX - rect.left) / rect.width) * 30; // 30 = viewBox width
    let svgY = ((e.clientY - rect.top) / rect.height) * 5;  // 5 = viewBox height

    trial_path = `M 2 2.5 Q ${svgX} ${svgY} 28 2.5`

    gsap.to("svg path", {
        attr: { d: trial_path },
        duration: 0.1,
        ease: "none"
    })

})


svg_cont.addEventListener("mouseleave", (e) => {

    trial_path = main_path

    gsap.to("svg path", {
        attr: { d: trial_path },
        duration: 1.5,
        ease: "elastic.out(1, 0.3)"
    })

})