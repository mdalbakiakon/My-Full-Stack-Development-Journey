const circle = document.querySelector(".circle");
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
  btn.style.filter = "none"; // temporarily disable filter

  gsap.to(".fa-arrow-up", {
    rotate: 180,
    duration: 0.8,
    color: "#A7CF4A",
    ease: "power2.out",
  });

  gsap.to(circle, {
    x: 10,
    duration: 1,
    ease: "elastic.out(1, 0.4)",
  });
});

btn.addEventListener("mouseleave", () => {
  btn.style.filter = "url('../asset/goo-filter.svg#goo')"; // restore filter

  gsap.to(".fa-arrow-up", {
    rotate: 45,
    duration: 0.8,
    color: "white",
    ease: "power2.out",
  });

  gsap.to(circle, {
    x: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)",
  });
});
