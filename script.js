 const navMenu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuBtn");
const topBtn = document.querySelector(".top-btn");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
      menuBtn.innerHTML = "✖";
    } else {
      menuBtn.innerHTML = "☰";
    }
  });
}

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show");

    if (menuBtn) {
      menuBtn.innerHTML = "☰";
    }
  });
});

window.addEventListener("scroll", function () {
  if (topBtn) {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
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