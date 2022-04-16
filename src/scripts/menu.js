const toggle = document.querySelector('.header__toggle')
const menu = document.querySelector('.header__menu')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('header__toggle_opened')
  menu.classList.toggle('header__menu_opened')
})
