const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation__item');
const navDesktop = document.querySelector('.nav-desktop')
const blur = document.querySelector('.blur')

const handleClick = () => {
	hamburger.classList.toggle('hamburger--active');
   nav.classList.toggle('navigation--active');
   blur.classList.toggle('blur--active')
   if (hamburger.classList.contains('hamburger--active')) {
      document.body.style.overflow = 'hidden'
   } else {
      document.body.style.overflow = ''
   }
};

navLinks.forEach(link => {
   link.addEventListener('click', () => {
      nav.classList.remove('navigation--active');
		hamburger.classList.remove('hamburger--active');
      blur.classList.remove('blur--active')
      document.body.style.overflow = ''
	});
});

hamburger.addEventListener('click', handleClick);

let currScrollY = 0

document.addEventListener('scroll', () => {
   if (currScrollY < scrollY) {
      navDesktop.style.transition = 'all .3s'
      navDesktop.style.top = '-100px'
      currScrollY = scrollY
   } else {
      navDesktop.style.top = '0px'
      currScrollY = scrollY
      
   }
})




