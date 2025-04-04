// Função para abrir e fechar o menu hambúrguer
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

// Função para exibir mensagem de sucesso na inscrição
document
  .getElementById("inscricao__form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página
    document.getElementById("mensagem").style.display = "block"; // Exibe a mensagem
    setTimeout(() => {
      document.getElementById("mensagem").style.display = "none"; // Esconde a mensagem após 3s
    }, 3000);
    this.reset(); // Limpa os campos do formulário
  });

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
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// Chama a função draw repetidamente
setInterval(draw, 33);

// Atualiza o tamanho do canvas ao redimensionar a janela
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
