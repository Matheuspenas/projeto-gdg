function toggleMenu() {
  document.getElementById("sidebar").classList.add("active");
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

// Função para abrir e fechar o menu hambúrguer
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

// Defina a data do evento
const eventDate = new Date("2025-05-24T09:00:00").getTime();

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
