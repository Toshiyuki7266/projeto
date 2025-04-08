document.getElementById('home-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rolagem suave
    });
  });
  
