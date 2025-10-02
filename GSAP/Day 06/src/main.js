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