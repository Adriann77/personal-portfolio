const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const blur = document.querySelector('.blur')

const handleClick = () => {
	hamburger.classList.toggle('hamburger--active');
   nav.classList.toggle('navigation--active');
   blur.classList.toggle('blur--active')
};

hamburger.addEventListener('click', handleClick);
