let menuBtn = document.getElementById("menu-btn");
let navLinks = document.getElementById("nav-links");
let menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  let isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

let scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


// Hero Section
ScrollReveal().reveal(".hero-img img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".hero-content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".hero-content .section-text", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".hero-content .hero-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// About Section
ScrollReveal().reveal(".about-img img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about-content .section-title", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about-content .section-text", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about-content .about-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// Feature Cards
ScrollReveal().reveal(".feature-card", {
  ...scrollRevealOption,
  interval: 500,
});

// Chef Section
ScrollReveal().reveal(".chef-img img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef-content .section-title", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef-content .section-text", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef-list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

// Swiper
let swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
    pauseOnMouseEnter: true, 
  },
  speed: 950, 
});
