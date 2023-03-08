const menuBtn = document.querySelector('.icon__menu');
const menu = document.querySelector('.header__menu');


menuBtn.addEventListener('click', () =>{
	menu.classList.toggle('active');
})

