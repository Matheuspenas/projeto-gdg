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
  
/* JS para abrir e fechar o modal dos participantes*/

// Função para abrir o modal
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Fechar o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};
