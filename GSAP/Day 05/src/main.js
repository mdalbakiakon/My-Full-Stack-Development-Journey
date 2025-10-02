gsap.registerPlugin(ScrollTrigger)

// Initialize Lenis with better compatibility settings
const lenis = new Lenis({
  duration: 1.5,
  smoothWheel: true,
  smoothTouch: false, // Better for mobile
  touchMultiplier: 1.5, // Smoother touch scrolling
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

// Add resize handler for better responsiveness
lenis.on("scroll", () => {
  // Optional: Add any custom scroll-based logic here
})



gsap.to("#pic", {
  y: "150%",
  x: "50%",
  ease: "none", // Use 'none' when scrub: true for smoothest results
  scrollTrigger: {
    trigger: "#pic",
    start: "-=5%",
    end: "+=110%",
    scrub: true,
    // pin: true, // Uncomment if you want pinning
    // markers: true, // Remove in production
    onRefresh: () => lenis.resize(), // Ensure Lenis knows about layout changes
  }
})

// Handle page load and resize
window.addEventListener("load", () => lenis.resize())
window.addEventListener("resize", () => lenis.resize())

// If you're using multiple animations, consider this pattern:
ScrollTrigger.addEventListener("refresh", () => lenis.resize())
ScrollTrigger.defaults({
  onRefresh: self => lenis.resize()
})

// For production, remember to:
// - Remove markers: true
// - Add error handling
// - Test on various devices and browsers