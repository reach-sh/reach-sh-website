'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const dropdownMenu = document.querySelector('.dropdown-menu')

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        if(dropdownMenu.classList.contains('open')) dropdownMenu.classList.remove('open')

        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  if(window.innerWidth <= 768) {
    const toggleDpopdown = (event) => {
      dropdownMenu.classList.toggle('open')

      if(event.target.className === 'dropdown-link') {
        navMenu.classList.remove('is-active')
        burgerBtn.classList.remove('is-active')
      }
    } 

    document.querySelector('.open-dropdown-btn').addEventListener('click', toggleDpopdown)
    Array.from(document.querySelectorAll('.dropdown-link')).map((link) => {
      link.addEventListener('click', toggleDpopdown)
    })
  }
});