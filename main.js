const body = document.body;
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modalBtn");
const modalCloseButton = document.querySelector(".modalCloseBtn");
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
const themeToggle = document.getElementById("theme-toggle");
const hero = document.getElementById("hero");
window.addEventListener("load", function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&display=swap";
  document.head.appendChild(link);
});
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark");
    applyTheme(isDark);
  });
}
const displayElement = () => {
  if (overlay) {
    overlay.classList.toggle("hidden");
  } else {
    console.error("Overlay element not found!");
  }
};
const closeElement = () => {
  if (overlay) {
    overlay.classList.toggle("hidden");
  } else {
    console.error("Overlay element not found!");
  }
};
const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
if (document.getElementById("hero")) {
  console.log("Main page detected!");
  if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closeElement);
  }

  if (modalButton) {
    modalButton.addEventListener("click", function () {
      if (modal) {
        modal.classList.add("active");
      }
    });
  }

  if (modalCloseButton && modal) {
    modalCloseButton.addEventListener("click", function () {
      modal.classList.remove("active");
    });
  }
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      alert("Message sent!");
    });
  }
}
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
