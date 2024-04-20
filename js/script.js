const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const blur = document.querySelector('.blur');
const main = document.querySelector('main');

const handleClick = () => {
	hamburger.classList.toggle('hamburger--active');
	nav.classList.toggle('navigation--active');
	blur.classList.toggle('blur--active');
	main.style.filter = blur('3');
};

hamburger.addEventListener('click', handleClick);
