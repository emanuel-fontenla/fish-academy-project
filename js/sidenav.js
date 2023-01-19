const handleSideNav = () => {
  overlay.classList.toggle("overlay-open");
  navbar.classList.toggle("navbar-open");
};

const hamburger = document.querySelector("#hamburger");
const overlay = document.querySelector("#overlay");
const navbar = document.querySelector("#navbar");

overlay.addEventListener("click", handleSideNav);
hamburger.addEventListener("click", handleSideNav);
