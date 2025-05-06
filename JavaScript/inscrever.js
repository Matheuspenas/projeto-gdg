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

// Script paraa armazenamento dos dados de inscrição
document
  .getElementById("inscricao__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = document.getElementById("inscricao__form");
    const formData = new FormData(form);
    const mensagem = document.getElementById("mensagem");
    const loader = document.getElementById("loader");
    const progress = document.querySelector(".progress");

    // Esconde a mensagem anterior e mostra o loader
    mensagem.style.display = "none";
    loader.style.display = "block";
    progress.style.animation = "loadProgress 2.5s forwards";

    fetch(
      "https://script.google.com/macros/s/AKfycbyWhSLRBPmvk46QCOxqeW5yNej-XCdXWes4DuV54H80PF_mme8i1RFUrxFF4qcBNJZZbA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        loader.style.display = "none";

        if (data.status === "sucesso") {
          mensagem.textContent = "Inscrição realizada com sucesso!";
          mensagem.style.color = "#4285f4";
        } else if (data.status === "ja_inscrito") {
          mensagem.textContent = "Você já está inscrito!";
          mensagem.style.color = "#0f0";
        } else {
          mensagem.textContent = "Erro ao enviar inscrição. Tente novamente.";
          mensagem.style.color = "#e63946";
        }

        mensagem.style.display = "block";
        setTimeout(() => {
          mensagem.style.display = "none";

          // Reseta a barra de carregamento
          progress.style.animation = "none";
          progress.offsetHeight; // força reinicialização
          progress.style.animation = null;
        }, 4000);

        form.reset();
      })
      .catch((err) => {
        console.error(err);
        loader.style.display = "none";
        mensagem.textContent = "Erro ao enviar inscrição. Tente novamente.";
        mensagem.style.color = "red";
        mensagem.style.display = "block";
        setTimeout(() => {
          mensagem.style.display = "none";
          progress.style.animation = "none";
          progress.offsetHeight;
          progress.style.animation = null;
        }, 4000);
      });
  });


// Script de contagem regressiva para o evento

// Defina a data do evento
const eventDate = new Date("2025-05-24T08:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
const countdown = setInterval(function () {
  // Pega data e horas atuais
  const now = new Date().getTime();

  // Calcula a diferença entre a data do evento e a data atual
  const distance = eventDate - now;

  // Calcula os dias, horas, minutos e segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe os resultados
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Se a contagem regressiva terminar, exibe uma mensagem
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "O Evento Começou !";
  }
}, 1000);

// Estilização do backgorund da tela

// Seleciona o canvas e define o contexto 2D
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Define o tamanho do canvas como o tamanho da janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Letras para o efeito Matrix
const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;

// Array para armazenar a posição de queda de cada coluna
const drops = Array.from({ length: columns }, () => 1);

// Função de animação
const colors = ["#007bff", "#28a745", "#fd7e14", "#dc3545"]; // azul, verde, laranja, vermelho
let colorIndex = 0;
let colorChangeInterval = 30; // muda de cor a cada 30 frames
let frameCount = 0;

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Atualiza a cor atual com base no índice
  ctx.fillStyle = colors[colorIndex];
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  // Incrementa o contador de frames e muda de cor se necessário
  frameCount++;
  if (frameCount >= colorChangeInterval) {
    frameCount = 0;
    colorIndex = (colorIndex + 1) % colors.length;
  }
}


// Chama a função draw repetidamente
setInterval(draw, 33);

// Atualiza o tamanho do canvas ao redimensionar a janela
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
