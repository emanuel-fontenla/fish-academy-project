const handleSideNav = () => {
  overlay.classList.toggle("overlay-open");
  navbar.classList.toggle("navbar-open");
};
const openModal = () => {
  contactModal.classList.add("contact-us-modal-open");
};
const closeModal = () => {
  contactModal.classList.remove("contact-us-modal-open");
};

const hamburger = document.querySelector("#hamburger");
const overlay = document.querySelector("#overlay");
const navbar = document.querySelector("#navbar");
const contactUs = document.querySelector("#contact-us");
const contactUsCloseBtn = document.querySelector("#contact-us-close-btn");
const contactModal = document.querySelector("#contact-us-modal");

overlay.addEventListener("click", handleSideNav);
hamburger.addEventListener("click", handleSideNav);
contactUs.addEventListener("click", openModal);
contactUsCloseBtn.addEventListener("click", closeModal);
