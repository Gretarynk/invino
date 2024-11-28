const slides = document.querySelectorAll('.slide');
const sliderWrapper = document.querySelector('.slider-wrapper');

let currentIndex = 0;
let direction=1;

const preloadImages = () => {
    slides.forEach((slide, index) => {
        const tempImg = new Image();
        tempImg.src = slide.src; 
        tempImg.onload = () => console.log(`Image ${index} preloaded: ${slide.src}`);
        tempImg.onerror = () => console.error(`Failed to preload image ${index}: ${slide.src}`);
    });
};


preloadImages();


const showNextSlide = () => {
    slides[currentIndex].classList.remove('active'); 
    currentIndex = (currentIndex + 1) % slides.length; 
    slides[currentIndex].classList.add('active'); 
};


let intervalId = setInterval(showNextSlide, 6000);



