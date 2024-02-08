gsap.from(".nav", {
    opacity: 0,
    duration: 2,
    ease: "power2.inOut"
});

gsap.from(".hero", {
    opacity: 0,
    duration: 2,
    ease: "power2.inOut"
});

gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.aboutme-container h1, .aboutme-container p', 
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.aboutme-container',
                    start: 'top 80%',
                    end: 'bottom 60%',
                    scrub: true
                }
            }
        );




gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false
  });
});
gsap.utils.toArray('.section.Portfolio').forEach((section, index) => {
  const w = section.querySelector('.demo-text');
  const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -50] : [w.scrollWidth * -1, 0];
  gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
          trigger: section,
          scrub: 0.5,
      }
  });
});
