function toggleMenu() {
    document.getElementById("sidebar").classList.add("active");
  }
  
  function closeMenu() {
    document.getElementById("sidebar").classList.remove("active");
  }
  
// Animação fade in

  function checkFadeInElements() {
    const elements = document.querySelectorAll('.fade-in-element');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

        if (isVisible && !element.classList.contains('visible')) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('load', checkFadeInElements);
window.addEventListener('scroll', checkFadeInElements);