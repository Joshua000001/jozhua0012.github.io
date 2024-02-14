gsap.registerPlugin(ScrollTrigger);


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

gsap.to(".frontend", {
  scrollTrigger: {
    trigger: ".hero",
    start: "center center",
    scrub: 0.5,
  },
  xPercent: 25,
});

gsap.to(".deverloper", {
  scrollTrigger: {
    trigger: ".hero",
    start: "center center",
    scrub: 0.5,
  },
  xPercent: -25,
});

gsap.to(".text-hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  opacity: 1,
});





gsap.fromTo('.aboutme-container h1, .aboutme-container p',
  { opacity: 0, scale: 0.9 },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.aboutme',
      start: 'top center',
      end: '+=200',
      scrub: true
    }
  }
);




gsap.utils.toArray('.up').forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        endTrigger: '.aboutme-container',
        end: 'bottom bottom', 
        pinSpacing: false
    });
});
gsap.utils.toArray('.gallery').forEach(section => {
  ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      pin: true,
      endTrigger: '.footer',
      end: 'bottom bottom', 
      pinSpacing: false
  });
});

gsap.utils.toArray('.project-work').forEach(section => {
  ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      pin: true,
      endTrigger: '.gallery',
      end: 'bottom bottom', 
      pinSpacing: false
  });
});












gsap.utils.toArray(".parallax").forEach((wrap) => {
  const y = wrap.getAttribute("data-y") || -100;

  gsap.to(wrap, {
    y: y,
    scrollTrigger: {
      trigger: wrap,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
    }
  });
});





gsap.utils.toArray('.card').forEach(card => {
  gsap.from(card, {
    x: 'random(-1000, 1000)',
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
      trigger: card,
      start: 'top bottom', 
      end: 'bottom bottom', 
      toggleActions: 'play none none none',
    }
  });
});






  gsap.utils.toArray('.portfolio').forEach((section, index) => {
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









  class HoverImage {
    constructor(element, options) {
      this.el = element;
      this.imgUrl = element.dataset.hoverImg;
      this.img = this.createHoverImage();
      this.init();
    }
  
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.animateImage(true);
      });
  
      this.el.addEventListener('mouseleave', () => {
        this.animateImage(false);
      });
  
      this.el.addEventListener('mousemove', (e) => {
        this.moveImage(e);
      });
    }
  
    createHoverImage() {
      let imageElm = new Image(900);
      imageElm.src = this.imgUrl;
      imageElm.classList.add('hover-image');
      imageElm.style.opacity = '0'; // Initially hide the image
      this.el.appendChild(imageElm);
      return imageElm;
    }
  
    animateImage(show) {
      const duration = 0.3;
      const scaleAmount = show ? 1.2 : 1;
      const opacityAmount = show ? 1 : 0;
      
      gsap.to(this.img, {
        scale: scaleAmount,
        opacity: opacityAmount,
        duration: duration,
        ease: "power2.out"
      });
    }
  
    moveImage(e) {
      const offset = -400; // Adjust this value as needed
      const offsetX = 500; // Adjust this value to move the image to the right
      this.img.style.left = `${e.clientX + offset + offsetX}px`;
      this.img.style.top = `${e.clientY + offset}px`;
    }
    
  
    
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const hoverImages = document.querySelectorAll("[data-hover-img]");
    hoverImages.forEach(item => new HoverImage(item));
  });

  gsap.to('.footer', {
    opacity: 1,
    y: 100,
    scrollTrigger: {
      trigger: '.gallery', 
      start: 'bottom bottom',
      end: 'bottom bottom',
      scrub: 1.5,
    }
  });



  document.addEventListener("DOMContentLoaded", function () {
    window.scrollTo(0, 0);
  });
  
  document.querySelector(".hamburger").addEventListener("click", function () {
    navExpanded.reversed() ? navExpanded.play() : navExpanded.reverse();
  });
  
  document.querySelectorAll(".nav-link ul li").forEach(function (element) {
    element.addEventListener("click", function () {
      console.log("working");
    });
  });
  
  window.addEventListener("scroll", function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scroll >= 10) {
      document.querySelector("nav").classList.add("expanded");
    } else {
      document.querySelector("nav").classList.remove("expanded");
    }
  });
  
  let navExpanded = gsap.timeline({ paused: true, reversed: true });
  
  navExpanded
    .to(".hamburger .bar:nth-child(1)", { duration: 0.3, y: 8, rotation: 45 }, "start")
    .to(".hamburger .bar:nth-child(2)", { duration: 0.3, opacity: 0 }, "start")
    .to(".hamburger .bar:nth-child(3)", { duration: 0.3, y: -8, rotation: -45 }, "start")
    .to(".nav-links ul", { duration: 1, ease: "power1.out", clipPath: "circle(150% at 100% 0%)" }, "start")
    .staggerTo(
      ".nav-links li, .nav-links button",
      0.5,
      { opacity: 1, y: 0, ease: "power1.easeOut" },
      0.1,
      "-=0.3"
    );

    
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.work-container, .work-container2').forEach(container => {
      gsap.to(container, {
        y: 'random(-100, 100)',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
 






    const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")

const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")

gsap.set(photos, {yPercent:101})

ScrollTrigger.create({
	trigger:".detailss",
	start:"top top",
	end:"bottom bottom",
	pin:".right",
	scrub:true
})



details.forEach( (detail, index) => {
	let headline = detail.querySelector("h1")
	ScrollTrigger.create({
		trigger:headline,
		start:"top 80%",
		end:"top 50%",
		animation: gsap.to(photos[index], {yPercent:0}),
		scrub:true,
		markers:false
	})
})







function togglePopup(popupId) {
  var popup = document.getElementById(popupId);
  
  // Toggle the visibility of the popup
  if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}




