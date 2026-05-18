 const navMenu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuBtn");
const topBtn = document.querySelector(".top-btn");
const loader = document.getElementById("loader");

window.addEventListener("load", function () {
  if (loader) {
    loader.style.display = "none";
  }
});

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    menuBtn.innerHTML = navMenu.classList.contains("show") ? "✖" : "☰";
  });
}

document.querySelectorAll(".nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    if (navMenu) navMenu.classList.remove("show");
    if (menuBtn) menuBtn.innerHTML = "☰";
  });
});

window.addEventListener("scroll", function () {
  if (topBtn) {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}