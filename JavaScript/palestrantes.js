function toggleMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}


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
