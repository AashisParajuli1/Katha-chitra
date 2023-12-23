// starting js-frontOne

let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("mousemove", function (e) {
    const position = btn.getBoundingClientRect();

    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    btn.children[0].style.transform =
      "translate(" + x * 0.2 + "px, " + y * 0.2 + "px)";
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseout", function (e) {
    btn.children[0].style.transform = "translate(0px, 0px)";
  });
});

// ending js of-frontOne

// js for home start from here

// js menu and cross bar

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//js for video slider navigation start

const btnss = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btnss.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btnss[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btnss.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

//js for video slider navigation ends

// js for scroll animation start

ScrollReveal({
  reset: true,
  distance: "50px",
  duration: "2000",
  delay: "200",
});

ScrollReveal().reveal(".main-title", { delay: 300, origin: "top" });
ScrollReveal().reveal(".sec-01 .image, .info", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal(".text-box", { delay: 500, origin: "right" });
ScrollReveal().reveal(".sec-02 .image", {
  delay: 50,
  origin: "top",
  interval: 50,
});
ScrollReveal().reveal(".text-box", { delay: 500, origin: "top" });

// js for scroll animation ends

// js for home ends from here

// work js starts here

// work js endss here
