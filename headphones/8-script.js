document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementsByClassName('menu-icon');
    const navbarMenu = document.getElementsByClassName('navbar-menu');

    menuIcon.addEventListener('click', function () {
      navbarMenu.classList.toggle('show');
      menuIcon.classList.toggle('open');
    });
});