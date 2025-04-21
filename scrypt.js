//  Funcionalidades do site
document.addEventListener("DOMContentLoaded", function() {
    // Para navegação mais leve	
    const navLinks = document.querySelectorAll('.main-nav a');
  
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, //altura do cabeçalho
            behavior: "smooth"
          });
        }
      });
    });
  
    console.log("Script carregado com sucesso!");
  });
  