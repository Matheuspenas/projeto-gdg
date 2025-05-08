// Script para funcionamento no menu hamburguer

function toggleMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

// Função para fechar o menu ao clicar fora dele

document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".menu__btn");

  const clickedOutsideSidebar = !sidebar.contains(event.target);
  const clickedOutsideHamburger = !hamburger.contains(event.target);

  if (
    sidebar.classList.contains("active") &&
    clickedOutsideSidebar &&
    clickedOutsideHamburger
  ) {
    closeMenu();
  }
});

// Animação fade in

function checkFadeInElements() {
  const elements = document.querySelectorAll(".fade-in-element");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

    if (isVisible && !element.classList.contains("visible")) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("load", checkFadeInElements);
window.addEventListener("scroll", checkFadeInElements);

// Script de animação 3d do background da página

VANTA.NET({
  el: "#vanta-net",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x00ff00, // verde
  backgroundColor: 0x121212,
});
