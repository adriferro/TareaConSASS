// Adrián Fernández Rodríguez
// https://github.com/adriferro/TareaConSASS.git

var menu = document.querySelector('.hamburger');

function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);
