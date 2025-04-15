// Script para funcionamento no menu hamburguer

function toggleMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

// Corrigido: busca pelo botão com a classe em vez do ID
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".menu__btn");

  const clickedOutsideSidebar = !sidebar.contains(event.target);
  const clickedOutsideHamburger = !hamburger.contains(event.target);

  if (sidebar.classList.contains("active") && clickedOutsideSidebar && clickedOutsideHamburger) {
    closeMenu();
  }
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
  backgroundColor: 0x000000,
});

// Script para funcionamento das funcionalidades da seção do carrossel com as fotos de eventos anteriores


const track = document.querySelector(".carrossel__track");
const images = document.querySelectorAll(".carousel-image");
const prevBtn = document.querySelector(".carrossel__btn.prev");
const nextBtn = document.querySelector(".carrossel__btn.next");
const dotsContainer = document.querySelector(".carrossel__dots");

let index = 0;
let autoSlideInterval;

// Criar bolinhas
images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    moveToSlide(i);
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
});

function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;

  images.forEach(img => img.classList.remove("active"));
  images[index].classList.add("active");

  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function moveToSlide(i) {
  index = i;
  updateCarousel();
}

function nextSlide() {
  index = (index + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
}

// Botões
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Swipe (toque em celular)
let startX = 0;
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
track.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    nextSlide();
    resetAutoSlide();
  }
  if (endX - startX > 50) {
    prevSlide();
    resetAutoSlide();
  }
});

// Redimensionamento
window.addEventListener("resize", updateCarousel);

// Auto slide
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000); // 5 segundos
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

updateCarousel();
startAutoSlide();

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
