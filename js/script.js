const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation__item');
const navDesktop = document.querySelector('.nav-desktop')

const handleClick = () => {
	hamburger.classList.toggle('hamburger--active');
	nav.classList.toggle('navigation--active');
	blur.classList.toggle('blur--active');
	main.style.filter = blur('3');
};

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		nav.classList.remove('navigation--active');
		hamburger.classList.remove('hamburger--active');
	});
});

hamburger.addEventListener('click', handleClick);

document.body.addEventListener('scroll', () => {
   navDesktop.classList.add('nav-desktop-onScroll')
})
