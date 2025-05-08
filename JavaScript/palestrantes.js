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

// Animação fade in da página

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-element");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // remove o observador depois que anima
        }
      });
    },
    {
      threshold: 0.1, // ativa quando 10% do elemento aparece
    }
  );

  elements.forEach((el) => observer.observe(el));
});

/* JS para abrir e fechar o modal dos participantes*/

// Função para abrir o modal
function abrirModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Função para fechar o modal
function fecharModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora da área do modal
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// Script de animação 3d do background da página

VANTA.NET({
  el: "#vanta-net",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xffa500,
  backgroundColor: 0x121212,
});
