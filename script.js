const scroll = new LocomotiveScroll({
  // The element on which LocomotiveScroll is applied
  //   el: document.querySelector("#main"), //or
  el: document.querySelector("[data-scroll-container]"),
  // Enables smooth scrolling
  smooth: true,
  // Controls the scrolling speed (min=0, max=1, default=0.1); lower value means slower, smoother scrolling
  // lerp: 0.02,
});
