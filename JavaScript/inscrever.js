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
