document.addEventListener('DOMContentLoaded', function() {
  let burgerBtn = document.getElementById('header__burger-btn');

  let menu = document.getElementById('header-menu');
  let cross = document.querySelector(".header__burger-cross");

  burgerBtn.onclick = function () {
    menu.classList.toggle("active");
    cross.classList.toggle("active");
  }

  cross.onclick = function() {
    menu.classList.toggle("active");
    cross.classList.toggle("active");
  }
})
