// Script para funcionamento no menu hamburguer

function toggleMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".menu__btn");

  const clickedOutsideSidebar = !sidebar.contains(event.target);
  const clickedOutsideHamburger = !hamburger.contains(event.target);

  if (sidebar.classList.contains("active") && clickedOutsideSidebar && clickedOutsideHamburger) {
    closeMenu();
  }
});


// Animação fade in da página

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in-element');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // remove o observador depois que anima
      }
    });
  }, {
    threshold: 0.1 // ativa quando 10% do elemento aparece
  });

  elements.forEach(el => observer.observe(el));
});

// Script de animação do background da página

VANTA.NET({
  el: "#vanta-net",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x0d6efd, // azul
  backgroundColor: 0x121212,
});

// Script de animação e funcionamento do botão bolha

const botaoBolha = document.querySelector('.botao__bolha');
const secaoInscrever = document.querySelector('.inscrever');
const menuBtn = document.querySelector('.menu__btn');

// Mostrar ou esconder o botão bolha baseado no scroll
function toggleBolhaVisivel() {
  const secaoTop = secaoInscrever.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (secaoTop < windowHeight - 100) {
    botaoBolha.classList.add('visible');
    botaoBolha.classList.remove('hidden');
  } else {
    botaoBolha.classList.remove('visible');
    botaoBolha.classList.add('hidden');
  }
}

// Função chamada ao clicar no botão
function destacarMenu() {
  const menuBtn = document.querySelector('.menu__btn');
  const notificacao = document.getElementById('notificacao');

  // Rolar até o botão
  menuBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Adiciona a animação pulse por 2 segundos
  menuBtn.classList.add('pulse');
  setTimeout(() => {
    menuBtn.classList.remove('pulse');
    notificacao.style.display = 'block';
  }, 2000);
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const notificacao = document.getElementById('notificacao');
  sidebar.classList.toggle('active');

  // Quando clicar no menu, some a bolinha
  notificacao.style.display = 'none';
}

function closeMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('active');
}

// Eventos
window.addEventListener('scroll', toggleBolhaVisivel);
window.addEventListener('load', toggleBolhaVisivel);

// Deixa a função disponível globalmente, já que o botão chama no onclick
window.destacarMenu = destacarMenu;


//  Script para exibir 4 eventos por vez
document.addEventListener("DOMContentLoaded", () => {
  const eventCards = document.querySelectorAll('.event-card');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const cardsPerClick = 4;

  let visibleCount = 4;

  // Oculta todos os eventos além dos 4 primeiros
  eventCards.forEach((card, index) => {
    if (index >= visibleCount) {
      card.classList.add('hidden');
    }
  });

  // Ao clicar no botão, mostra mais 4 eventos
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      const hiddenCards = document.querySelectorAll('.event-card.hidden');

      for (let i = 0; i < cardsPerClick && i < hiddenCards.length; i++) {
        hiddenCards[i].classList.remove('hidden');
      }

      if (document.querySelectorAll('.event-card.hidden').length === 0) {
        loadMoreBtn.style.display = 'none';
      }
    });
  }
});
