// ========================================
// LOAD NAVBAR HTML
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  fetch("sections/navbar/navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load navbar.html");
      }

      return response.text();
    })
    .then((data) => {
      navbarContainer.innerHTML = data;

      // Initialize navbar functionality
      initializeNavbar();
    })
    .catch((error) => {
      console.error("Navbar loading error:", error);
    });
});

// ========================================
// NAVBAR FUNCTIONALITY
// ========================================

function initializeNavbar() {
  const toggleButton = document.getElementById("navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  if (!toggleButton || !navbarMenu) {
    console.error("Navbar elements not found.");
    return;
  }

  // Mobile menu toggle
  toggleButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });

  // Close mobile menu after clicking a link
  const navbarLinks = document.querySelectorAll(".navbar-link");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
    });
  });
}
