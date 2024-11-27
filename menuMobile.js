const burgerMenu = document.getElementById('burgerMenuButton');
const mobileMenu = document.querySelector('.menuMobile');
const closeButton = document.getElementById('closeBurger');


const toggleMenu = () => {
  mobileMenu.classList.toggle('active'); 
  burgerMenu.classList.toggle('hidden'); 
  closeButton.classList.toggle('hidden'); 
};

// Add event listeners
burgerMenu.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

// Reset state when resizing window
window.addEventListener('resize', () => {
  if (window.innerWidth > 769) {
    mobileMenu.classList.remove('active');
    burgerMenu.classList.remove('hidden'); 
    closeButton.classList.add('hidden');
  }
});