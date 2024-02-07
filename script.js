gsap.from(".nav", {
    opacity: 0,
    duration: 3,
    ease: "power2.inOut"
});

gsap.from(".hero", {
    opacity: 0,
    duration: 3,
    ease: "power2.inOut"
});


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false
  });
});