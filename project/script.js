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
}
loading();

// locomotiv scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// set page 2 background image as hover on title
var products = document.querySelectorAll(".product");
var page2 = document.querySelector("#page2");
products.forEach(function (product) {
  // on mouse enter change background image
  product.addEventListener("mouseenter", function () {
    const img = product.getAttribute("data-image");
    page2.style.backgroundImage = `url(${img})`;
  });
});
