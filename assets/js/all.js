// 第一題的錯誤意思是要使用相對路徑 可以改成
import { gsap, ScrollTrigger, TextPlugin } from "../../node_modules/gsap/all.js";

// import { gsap } from "../../node_modules/gsap";
// import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger";
// import { TextPlugin } from "../../node_modules/gsap/TextPlugin";
AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".loop", {
  xPercent: "-50", 
  ease: "none",
  duration: 10,
  repeat: -1,
});

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".box1",
      markers: true,
      start: 'top 35%',
      end: 'top 1%',
      scrub: true,
    },
  })

tl.to('.box1', {
    top: 0,
    top: '-100%',
    // yPercent: '-100',
    duration: 1000,
    position: 'absolute',
  })



  VanillaTilt.init(document.querySelector(".image1"), {
    max: 25,
    scale: 1.1,
    speed: 1000,
  });
  VanillaTilt.init(document.querySelector(".image2"), {
    max: 25,
    scale: 1.1,
    speed: 1000,
  });
  VanillaTilt.init(document.querySelector(".image3"), {
    max: 25,
    scale: 1.1,
    speed: 1000,
  });

  