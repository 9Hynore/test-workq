const menuBtn = document.querySelector('.icon__menu');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () =>{
	menu.classList.toggle('active');
})

