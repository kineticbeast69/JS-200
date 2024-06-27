const show = document.getElementsByClassName("hamburger")[0];
const hide = document.getElementsByClassName("cross")[0];
const mobileNav = document.getElementsByClassName("mobile-nav")[0];

show.addEventListener("click", () => {
  mobileNav.style.display = "block";
});
hide.addEventListener("click", () => {
  mobileNav.style.display = "none";
});
