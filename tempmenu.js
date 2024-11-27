const burgerMenu = document.getElementById('burgerMenuButton');
const mobileMenu = document.querySelector('.menuMobile');
const closeButton = document.getElementById('closeBurger');

// Function to toggle the mobile menu and the buttons
const toggleMenu = () => {
  mobileMenu.classList.toggle('active'); // Toggle menu visibility
  burgerMenu.classList.toggle('hidden'); // Hide/show burger button
  closeButton.classList.toggle('hidden'); // Hide/show close button
};

// Add event listeners
burgerMenu.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

// Reset state when resizing window
window.addEventListener('resize', () => {
  if (window.innerWidth > 769) {
    mobileMenu.classList.remove('active'); // Hide mobile menu
    burgerMenu.classList.remove('hidden'); // Show burger button
    closeButton.classList.add('hidden'); // Hide close button
  }
});
