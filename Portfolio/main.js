const body = document.body;
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modalBtn");
const modalCloseButton = document.querySelector(".modalCloseBtn");
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
const themeToggle = document.getElementById("theme-toggle");
const hero = document.getElementById("hero");

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.querySelector("#backToTopBtn");

  if (!backToTopBtn) {
    console.error("Back to Top button not found!");
    return;
  }

  const scrollFunction = () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.classList.remove("show");
      backToTopBtn.style.display = "none";
    }
  };

  window.addEventListener("scroll", scrollFunction);

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  scrollFunction();
});

document.addEventListener("DOMContentLoaded", function () {
  const mainNav = document.getElementById("main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
    });
  }
});

const applyTheme = (isDark) => {
  document.body.classList.toggle("dark", isDark);
  if (hero) {
    hero.classList.toggle("dark", isDark);
  }
  themeToggle.textContent = isDark ? "Light 🌞" : "Dark 🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

const savedTheme = localStorage.getItem("theme") === "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);
});

const displayElement = () => {
  overlay.classList.toggle("hidden");
};

const closeElement = () => {
  overlay.classList.toggle("hidden");
};

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

modalCloseButton.addEventListener("click", closeElement);

modalButton.addEventListener("click", function () {
  modal.classList.add("active");
});

modalCloseButton.addEventListener("click", function () {
  modal.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const revealSection = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.85) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection();
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  alert("Message sent!");
});
