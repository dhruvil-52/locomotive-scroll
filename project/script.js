function loading() {
  const tl = gsap.timeline();

  tl.to("#yellow-loader-1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });

  tl.from(
    "#yellow-loader-2",
    {
      top: "100%",
      delay: 0.1,
      duration: 0.9,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      delay: 0.2,
      duration: 0.5,
      color: "black",
    },
    "anim"
  );

  tl.to("#loader", {
    display: "none",
  });

  const scroll = new LocomotiveScroll({
    // The element on which LocomotiveScroll is applied
    //   el: document.querySelector("#main"), //or
    el: document.querySelector("[data-scroll-container]"),
    // Enables smooth scrolling
    smooth: true,
    // Controls the scrolling speed (min=0, max=1, default=0.1); lower value means slower, smoother scrolling
    // lerp: 0.02,
  });
}
loading();
