document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
  
    menuLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = event.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });
  