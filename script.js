// Mobile navigation toggle
const menuToggle = document.getElementById("menuToggle") || document.querySelector(".menu-toggle");
const siteNav = document.getElementById("siteNav") || document.getElementById("nav") || document.querySelector(".nav");
const siteHeader = document.getElementById("siteHeader");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

// Header background elevation on scroll
window.addEventListener("scroll", () => {
  if (siteHeader) {
    if (window.scrollY > 40) {
      siteHeader.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.7)";
      siteHeader.style.borderColor = "rgba(245, 158, 11, 0.25)";
    } else {
      siteHeader.style.boxShadow = "none";
      siteHeader.style.borderColor = "rgba(244, 240, 231, 0.1)";
    }
  }
});

// Update dynamic year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
