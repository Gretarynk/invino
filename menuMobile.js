const burgerMenu = document.getElementById('burgerMenuButton');
const mobileMenu = document.querySelector('.menuMobile');
const closeButton = document.getElementById('closeBurger');


const toggleMenu = () => {
  mobileMenu.classList.toggle('active'); 
  burgerMenu.classList.toggle('hidden'); 
  closeButton.classList.toggle('hidden'); 
};
const closeMenuOnScroll = () => {
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    burgerMenu.classList.remove('hidden');
    closeButton.classList.add('hidden');
  }
};


burgerMenu.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);


window.addEventListener('resize', () => {
  if (window.innerWidth > 769) {
    mobileMenu.classList.remove('active');
    burgerMenu.classList.remove('hidden'); 
    closeButton.classList.add('hidden');
  }
});
window.addEventListener('scroll', closeMenuOnScroll);